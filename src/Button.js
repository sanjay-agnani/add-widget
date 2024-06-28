import React from 'react';
import './Button.css';

const Button = () => {
  const [num, setNum] = React.useState(10);
  console.log("num", num);
  
  return (
    <button className="bottom-right-button">
      Connect with Me
    </button>
  );
};

export default Button;