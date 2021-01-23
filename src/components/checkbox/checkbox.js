import React from 'react';
import './checkbox.scss';

const Checkbox = ({ isCheckbox }) => {
  const inputHandler = () => {
    isCheckbox();
  };
  return (
    <label className="checkbox">
      <input onChange={inputHandler} className="checkbox__item" type="checkbox" />
      <span className="checkbox__new"></span>
    </label>
  );
};

export default Checkbox;
