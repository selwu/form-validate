import React from 'react';
import './checkbox.scss';

const Checkbox = () => {
  return (
    <label className="checkbox">
      <input className="checkbox__item" type="checkbox" />
      <span className="checkbox__new"></span>
    </label>
  );
};

export default Checkbox;
