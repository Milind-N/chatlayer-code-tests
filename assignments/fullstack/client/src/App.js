import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { animateScroll } from "react-scroll";
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import { constants } from './constants'

let socket;
const App = () => {
  const [messages, setMessages] = useState([])

  const sendMessage = (text) => {
    setMessages([
      ...messages,  
      {
        senderId: constants.CLIENT_ID,
        text: text
      }
    ])

    if(text) {
      socket.emit(constants.CHAT_EVENT, text);
    }
  }

  useEffect(() => {
    socket = socketIOClient(constants.BOT_SERVER);

    socket.on(constants.CHAT_EVENT, (message) => {
      setMessages(messages => [ ...messages, {
        senderId: constants.SERVER_ID,
        text: message
      }]);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: "message-list"
    });
  }
  
  return (
    <div className="App">
      <div className="header">
        <h1>{constants.APP_TITLE}</h1>
      </div>
      <MessageList messages={messages} />
      <SendMessageForm sendMessage={sendMessage} />
    </div>
  );
}

export default App;
