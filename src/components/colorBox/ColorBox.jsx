import React, { useState } from 'react';
import PropTypes from 'prop-types';
ColorBox.propTypes = {
  
};

function ColorBox() {
  const [color, setColor] = useState('red');
  return (
    <div 
      className="colorBox"
      style={{backgroundColor: color}}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;