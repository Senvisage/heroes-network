import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="App-header">
      <h1>Heroes Network</h1>
      <h6>
        <span className="d-inline d-sm-none">(XS)</span>
        <span className="d-none d-sm-inline d-md-none">(SM)</span>
        <span className="d-none d-md-inline d-lg-none">(MD)</span>
        <span className="d-none d-lg-inline d-xl-none">(L)</span>
        <span className="d-none d-xl-inline">(XL)</span>
      </h6>

      <p>
        Record your heroes, read their stories and share them all over the world
        !
      </p>
    </header>
  );
};
export default Header;
