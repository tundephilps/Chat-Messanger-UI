import React from "react";
import "./App.scss";
import ChatArea from "./components/ChatArea";
import Conversation from "./components/Conversation";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div class="app">
        <Header />
        <div class="wrapper">
          <Conversation />
          <ChatArea />
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
