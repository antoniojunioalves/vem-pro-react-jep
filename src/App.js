import React, { useState } from 'react';
import './App.css';

import { Typography, Button, Toast } from '@bayon/commons';

import Logo from './components/Logo';
import Buttons from './components/Buttons';
import Header from './components/Header';

function App() {
  const [repeat, setRepeat] = useState(1)

  return (
    <div className="App">
      <Header>
        <Logo repeat={repeat}/> 
        <Buttons repeat={repeat} setRepeat={setRepeat} />
        <Typography lineHeight={3} size={18}>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <Button
          href="https://reactjs.org"
          variant="subtle"
        >
          Learn React
        </Button>
      </Header>
      <Toast
        open={repeat === 6}
        type="error"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        message="O valor máximo permitido é 6!"
      />
    </div>
  );
}

export default App;
