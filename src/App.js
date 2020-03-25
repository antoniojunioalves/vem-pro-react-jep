import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Texto from './components/Texto';
import Link from './components/Link';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header>
        <Logo /> 
        <Texto />
        <Link />
      </Header>
    </div>
  );
}

export default App;
