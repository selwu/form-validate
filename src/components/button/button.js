import React from 'react';
import './button.scss';

const Button = ({ name, isDisabled }) => {
  return (
    <button disabled={isDisabled} type="submit" className="button">
      {name}
    </button>
  );
};

export default Button;
