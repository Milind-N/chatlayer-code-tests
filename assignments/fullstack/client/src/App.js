import React, { useState } from "react";
import MessageList from './MessageList'
import { constants } from './constants'

const App = () => {
  const [messages, setMessages] = useState([])
  
  return (
    <div className="App">
      <div className="header">
        <h1>{constants.APP_TITLE}</h1>
      </div>
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
