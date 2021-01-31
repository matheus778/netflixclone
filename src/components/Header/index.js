import React from 'react';
import './Header.css';

function Header({black}) {
  return (
    <header className={black ? 'black': ''}>
      
      <div className="header--logo">
        <a href="/">
          <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"/>
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario"/>
        </a>
      </div>
    </header>
  );
};

export default Header;