import React from 'react';
import './button.scss';

const Button = ({ name, onSubmit }) => {
  return (
    <button onClick={onSubmit} type="submit" className="button">
      {name}
    </button>
  );
};

export default Button;
