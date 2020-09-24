import React, { useState } from 'react';
import { constants } from './constants';

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleClick = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message) return;
    sendMessage(message);
    setMessage('');
  }

  return (
    <div className="footer">
    <form>
      <input
        onChange={handleClick}
        value={message}
        placeholder={constants.PLACE_HOLDER}
        type="text" 
      />
      <button onClick={handleSubmit}>{constants.SEND_BUTTON_TEXT}</button>
    </form>
    </div>
  )
}

export default SendMessageForm;