import React from 'react';
import Button from 'react-bootstrap/Button'


const Title = () => {
    return(
      <div style={ {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column'
      }}>
        <h1>
          <a href="https://github.com/Jungdos/React_project">
            <img className='github'
            src='./images/github.png' 
            style={ {
              width: '50px',
              height: '50px',
              margin: 0,
              padding: 0
            }}></img>
          </a>
        </h1>
        <h2>
         <Button variant="dark" 
         style={{
          width: '200px'
         }}>Github</Button>
        </h2>
        </div>
    )
}

  export default Title;