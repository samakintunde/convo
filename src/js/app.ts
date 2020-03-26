import { dbPromise } from "./idb-handler.js";

// SOCKET OPERATIONS
const socket = io();

const chatForm = document.forms["chat-form"];
const setUserForm = document.forms["set-user-form"];

const chatArea = document.querySelector(".chat");
const userNameEl = document.querySelector(".header__user-name");
const userImageEl = document.querySelector(".header__user-image");

const downloadBtn = document.getElementById(".download-btn");

const appState = {
  name: "",
  messages: [],
  inputFocused: false
};

const getMessage = () => {
  return chatForm.message.value;
};

const getCurrentTime = () => {
  const d = new Date();
  return d.toLocaleTimeString();
};

const renderProfile = () => {
  userNameEl.textContent = appState.name;
  userImageEl.src = `https://api.adorable.io/avatars/28/${appState.name}.png`;
};

const renderImage = props => {
  console.log(props);
};

// build Toast
const renderToast = payload => {
  const { message } = payload;

  const toastRow = document.createElement("div");
  const toastEl = document.createElement("p");

  toastRow.className = "toast";
  toastEl.textContent = message;

  toastRow.appendChild(toastEl);

  return toastRow;
};

const notification = () => {
  const src =
    "https://web.whatsapp.com/assets/0a598282e94e87dea63e466d115e4a83.mp3";
  const tone = new Audio(src);

  const play = () => tone.play();

  return { play };
};

// HANDLE TYPING
const setInputFocused = e => {
  appState.inputFocused = e.eventPhase === 2 ? !appState.inputFocused : null;
};

const sendIsTyping = payload => {
  socket.emit("userTyping", payload);
};

const renderTyping = payload => {
  const { name, isTyping } = payload;

  // Check if user is currently typing
  if (!isTyping) {
    const typingUserEl = document.querySelector(`[data-user-typing="${name}"]`);
    console.log(typingUserEl);
    chatArea.removeChild(typingUserEl);
    return null;
  } else {
    const typingUserEl = document.querySelector(`[data-user-typing="${name}"]`);

    if (typingUserEl && typingUserEl.dataset["user-typing"] === name)
      return null;

    const toastRow = document.createElement("div");
    toastRow.setAttribute("data-user-typing", name);
    const toastEl = document.createElement("p");

    toastRow.className = "toast";
    toastEl.textContent = `${name} is typing...`;

    toastRow.appendChild(toastEl);
    return toastRow;
  }
};

// build Message
const renderMessage = payload => {
  const { name, message } = payload;

  const messageRow = document.createElement("div");
  if (name === appState.name) {
    messageRow.className = "message-container message-container--right";
  } else {
    messageRow.className = "message-container message-container--left";
  }

  const messageBoxEl = document.createElement("article");
  messageBoxEl.className = "message";

  const messageEl = document.createElement("p");
  messageEl.className = "message__text";
  messageEl.textContent = message;

  const nameEl = document.createElement("p");
  nameEl.className = "message__author";
  nameEl.textContent = name;

  const dateEl = document.createElement("p");
  dateEl.className = "message__timestamp";
  dateEl.textContent = getCurrentTime();

  messageBoxEl.appendChild(nameEl);
  messageBoxEl.appendChild(messageEl);
  messageBoxEl.appendChild(dateEl);

  messageRow.appendChild(messageBoxEl);

  return messageRow;
};

// Receive Messages
socket.on("syncMessages", payload => {
  notification().play();
  chatArea.appendChild(renderMessage(payload));
  appState.messages.push(payload.message);
  chatArea.scrollBy(0, 500);
});

let route = location.pathname;

// Send Messages
if (route.endsWith("/chat.html")) {
  const data = JSON.parse(localStorage.getItem("userData"));

  if (data) {
    appState.name = data.name;
    appState.messages = [...data.messages] || [];
    userNameEl.innerText = appState.name;
  }

  socket.emit("userJoined", {
    name: appState.name
  });

  // Joining the chat
  socket.on("userJoined", payload => {
    chatArea.appendChild(renderToast(payload));
  });

  chatForm.message.addEventListener("focus", e => {
    setInputFocused(e);
    sendIsTyping({ name: appState.name, isTyping: appState.inputFocused });
  });

  chatForm.message.addEventListener("change", e => {
    console.log(e.eventPhase);
  });

  chatForm.message.addEventListener("blur", e => {
    setInputFocused(e);
    sendIsTyping({ name: appState.name, isTyping: appState.inputFocused });
  });

  socket.on("userTyping", payload => {
    chatArea.appendChild(renderTyping(payload));
  });

  // Render Image and Name
  renderProfile();

  chatForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = appState.name || "Anonymous";
    const message = getMessage();

    // Set typing state After sending message
    sendIsTyping({ name: appState.name, isTyping: false });

    socket.emit("sendMessage", { name, message });
    chatForm.reset();
  });
}

// Set Username
if (route.endsWith("/") || route.endsWith("/index.html")) {
  // console.log(location);
  setUserForm.addEventListener("submit", e => {
    e.preventDefault();
    appState.name = setUserForm.name.value;

    const data = JSON.stringify({
      name: appState.name,
      messages: appState.messages
    });

    localStorage.setItem("userData", data);

    // Add user profile to database

    location.pathname = `/chat.html`;
  });
}
