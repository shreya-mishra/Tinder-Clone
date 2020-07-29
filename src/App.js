import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          {/* Chat Screen */}
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          {/* Tinder cards */}
          <Route path="/">
            {/* header */}
            <Header />
            <TinderCards />
            {/* Buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>

        {/* Individual Chat Screen */}
      </Router>
    </div>
  );
}

export default App;
