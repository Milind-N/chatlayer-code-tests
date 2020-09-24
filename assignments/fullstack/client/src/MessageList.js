import React from 'react';
import { constants } from './constants';

const MessageList = ({ messages }) => {
  const getFloatClass = (senderId) => {
    return senderId === constants.SERVER_ID ? 'float-left' : 'float-right'
  }

  const getBackGroundClass = (senderId) => {
    return senderId === constants.SERVER_ID ? 'background-left' : 'background-right'
  }

  return (
    <div className="message-list" id="message-list">                 
      {messages.map((message, index) => {
        const floatClass = getFloatClass(message.senderId);
        const backGroundClass = getBackGroundClass(message.senderId);

        return (
          <div key={index} className={floatClass}>
            <div className={`bubble ${backGroundClass}`}>
              {message.text}
            </div>
          </div>            
        )
      })}
    </div>
  )
}

export default MessageList;