import React, { useState } from "react";
import "./chatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://image.winudf.com/v2/image1/Y29tLnVuaXZzdHVkaW9zYXBwcy5lbGxlbmRlZ2VuZXJlc3dhbGxwYXBlcnNoZF9zY3JlZW5fMTBfMTU1MjQzNjgyMF8wNjY/screen-10.jpg?fakeurl=1&type=.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image:
        "https://image.winudf.com/v2/image1/Y29tLnVuaXZzdHVkaW9zYXBwcy5lbGxlbmRlZ2VuZXJlc3dhbGxwYXBlcnNoZF9zY3JlZW5fMTBfMTU1MjQzNjgyMF8wNjY/screen-10.jpg?fakeurl=1&type=.jpg",
      message: "Hows its going",
    },
    {
      message: "Hey how are you Ellen!",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        ></input>
        <button onClick={handleSend} className="chatScreen__inputButton">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
