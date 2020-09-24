import React, { useState } from "react";
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import { constants } from './constants'

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
