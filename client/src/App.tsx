import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { GlobalStyles } from "./theme/global-styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "routes/home";
import { JoinRoom } from "routes/join-room";
import { CreateRoom } from "routes/create-room";
import { Chat } from "routes/chat";
import { Header } from "components/common/Header";
// import { ContextProvider } from "contexts";

function App() {
  return (
    // <ContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/join">
            <JoinRoom />
          </Route>
          <Route path="/create">
            <CreateRoom />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    // </ContextProvider>
  );
}

export default App;
