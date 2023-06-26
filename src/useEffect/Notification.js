import React, { useState, useEffect } from 'react';

const Notification = ({ show, onClose }) => {
  const [clickCount, setClickCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (clickCount >= 3) {
      setVisible(false);
      setTimeout(onClose, 1000);
    }
  }, [clickCount, onClose]);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  let message;
  switch (clickCount) {
    case 1:
      message = "사실 한번더 눌러야해요";
      break;
    case 2:
      message = "진짜로 누르면 사라져요";
      break;
    default:
      message = "누르면 사라져요";
  }

  return (
    <div 
      onClick={handleClick}
      style={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        backgroundColor: '#edb41b', 
        padding: '10px', 
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '20px',
        opacity: visible ? '1' : '0',
        transition: 'opacity 1s ease-in-out'
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
