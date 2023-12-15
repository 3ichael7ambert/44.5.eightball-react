import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [currentColor, setCurrentColor] = useState('white');
  const [currentMessage, setCurrentMessage] = useState('Think of a Question');

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setCurrentColor(color);
    setCurrentMessage(msg);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getRandomAnswer();
    }
  };

  return (
    <div
      className="EightBall"
      style={{ backgroundColor: currentColor, borderRadius: '50%', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
      onClick={getRandomAnswer}
      onKeyPress={handleKeyPress}
      tabIndex="0" // This makes the div focusable and enables key events
    >
      <p>{currentMessage}</p>
    </div>
  );
};

export default EightBall;

