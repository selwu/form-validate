import React from 'react';
import './button.scss';

const Button = ({ name, onSubmit, isDisabled }) => {
  return (
    <button disabled={isDisabled} onClick={onSubmit} type="submit" className="button">
      {name}
    </button>
  );
};

export default Button;
