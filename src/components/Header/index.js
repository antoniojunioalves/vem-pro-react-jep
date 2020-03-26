import React from 'react';
import './Header.css';

export const Header = ({children}) => {
  return (
    <header className="App-header">
      {children}
    </header>
  );
}

export default Header;

