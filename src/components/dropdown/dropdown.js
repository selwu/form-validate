import React, { useState } from 'react';
import './dropdown.scss';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [language, setLanguage] = useState('');

  const dropdownHandler = () => {
    setIsActive(!isActive);
  };

  const inputHandler = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };
  return (
    <div className="dropdown">
      <div className={isActive ? 'dropdown__container active' : 'dropdown__container'}>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={inputHandler}
            value={'ru'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Русский
        </label>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={inputHandler}
            value={'en'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Английский
        </label>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={inputHandler}
            value={'ch'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Китайский
        </label>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={inputHandler}
            value={'is'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Испаниский
        </label>
      </div>
      <div className="dropdown__selected-label">
        Язык
        <input placeholder="Язык" className="dropdown__selected" />
      </div>
      <div onClick={dropdownHandler} className="dropdown__selected-mask"></div>
    </div>
  );
};

export default Dropdown;
