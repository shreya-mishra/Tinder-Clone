import React from "react";
//import "Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey how are you :)"
        timestamp="40seconds ago"
        profilePic="https://i.pinimg.com/originals/e8/7e/fd/e87efd044d7cb05a4a43b8d9807859ae.jpg"
      ></Chat>

      <Chat
        name="Ellen"
        message="Hey whats up you?"
        timestamp="34 seconds ago"
        profilePic="https://image.winudf.com/v2/image1/Y29tLnVuaXZzdHVkaW9zYXBwcy5lbGxlbmRlZ2VuZXJlc3dhbGxwYXBlcnNoZF9zY3JlZW5fMTBfMTU1MjQzNjgyMF8wNjY/screen-10.jpg?fakeurl=1&type=.jpg"
      ></Chat>

      <Chat
        name="Sandra"
        message="Hey how are you?"
        timestamp="40seconds ago"
        profilePic="https://i.pinimg.com/originals/b2/07/a8/b207a8e74dec619ecb9290a0682b1e5b.jpg"
      ></Chat>

      <Chat
        name="Natasha"
        message="Hey how are you?"
        timestamp="40seconds ago"
        profilePic="https://images8.alphacoders.com/641/thumb-350-641550.jpg"
      ></Chat>
    </div>
  );
}

export default Chats;
