import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Navigation = () => {
  const routes = [
    { to: '/', text: '홈' },
    { to: '/about', text: '소개' },
    { to: '/prop', text: '오시는길(약도)' },
  ];

  return (
    <ul style={{ textAlign: 'center' }}>
      {routes.map((route, i) => (
        <li key={i} className='Router_li'>
          <Link to={route.to} className='Router_a'>
            <Button variant="success">{route.text}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
