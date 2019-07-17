// import { openDB } from "./vendor/idb";

// const db = async () =>
//   openDB('userInfo', '1.0', {

//   });

const socket = io();

const chatForm = document.forms["chat-form"];
const setUserForm = document.forms["set-user-form"];

const chatArea = document.querySelector(".chat");
const userEl = document.querySelector(".header__user");

const appState = {
  name: "",
  messages: []
};

const getMessage = () => {
  //const message = form.message.value;
  return chatForm.message.value;
};

const getCurrentTime = () => {
  const d = new Date();
  return d.toLocaleTimeString();
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
  chatArea.appendChild(renderMessage(payload));
  appState.messages.push(payload.message);
});

let route = location.pathname;

// Send Messages
if (route.endsWith("/chat.html")) {
  const data = JSON.parse(localStorage.getItem("userData"));
  console.log(data);
  userEl.textContent = appState.name;

  if (data) {
    appState.name = data.name;
    appState.messages = [...data.messages] || [];
    userEl.innerText = appState.name;
  }

  chatForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = appState.name || "Anonymous";
    const message = getMessage();

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
    location.pathname = `/chat.html`;

    if (route.endsWith("/")) {
      location.pathname = `chat.html`;
    } else {
      location.pathname = `/chat.html`;
    }
  });
}
