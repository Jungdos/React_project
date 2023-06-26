import React from 'react'

const LoadingScreen = ( {isFadingOut} ) => (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba (0, 0, 0, 0.5)',
      transition: 'opacity 1s',
      opacity: isFadingOut ? 0 : 1
      }}>
        <h1>공사콕에 방문해 주신걸 환영합니다!</h1>
    </div>
  )

  export default LoadingScreen;