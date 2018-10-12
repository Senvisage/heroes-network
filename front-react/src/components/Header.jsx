import React from 'react';
import logo from '../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Record your heroes, read their stories and share them all over the world
        !
      </p>
    </header>
  );
};
export default Header;
