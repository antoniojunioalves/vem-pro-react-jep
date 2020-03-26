import React, { useState } from 'react';
import './Buttons.css';

import { Button, Typography } from '@bayon/commons';

const Buttons = ({ setRepeat, repeat }) => {
  const [countPlus, setCountPlus] = useState(0);
  const [countMinus, setCountMinus] = useState(0);

  const handleClickPlus = () => {
    setRepeat((repeat) => repeat + 1);
    setCountPlus((count) => count + 1);
  }

  const handleClickMinus = () => {
    setRepeat((repeat) => repeat - 1);
    setCountMinus((count) => count + 1);
  }
  return (
    <>
      <div className="App-logo-buttons">
        <Button 
          disabled={repeat === 6} 
          onClick={handleClickPlus}
          variant="primary"
        >
          Logo + 
        </Button>
        <Button 
          disabled={repeat === 1} 
          onClick={handleClickMinus}
          variant="default"
        >
          Logo - 
        </Button>
      </div>
      <div>
        <Typography lineHeight={2} size={16}>
          <b>Logo +</b> button was clicked {countPlus} times 
        </Typography>
        <Typography lineHeight={2} size={16}>
          <b>Logo -</b> button was clicked {countMinus} times 
        </Typography>
      </div>
    </>
  );
}

export default Buttons;

