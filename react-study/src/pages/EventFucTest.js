import React, { useState } from 'react';

const EventFucTest = () => {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={onChangeUsername} />

      <input
        type="text"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default EventFucTest;