import React from 'react';

const Notification = ({ message, show, onClose }) => (
    <div 
    onClick={onClose}
    style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      backgroundColor: '#edb41b', 
      padding: '10px', 
      transform: show ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-out',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: '20px'
      }}>
        {message}
    </div>
);

export default Notification;