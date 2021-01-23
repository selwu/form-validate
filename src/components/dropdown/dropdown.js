import React, { useState } from 'react';
import './dropdown.scss';

const Dropdown = ({ onLanguage }) => {
  const [isActive, setIsActive] = useState(false);
  const [language, setLanguage] = useState('');

  const dropdownHandler = () => {
    setIsActive(!isActive);
  };

  const inputHandler = (e) => {
    const languageValue = e.target.value;
    setLanguage(() => languageValue);
    switch (languageValue) {
      case 'Русский': {
        onLanguage('ru');
        break;
      }
      case 'Английский': {
        onLanguage('en');
        break;
      }
      case 'Китайский': {
        onLanguage('ch');
        break;
      }
      case 'Испаниский': {
        onLanguage('es');
        break;
      }
      default: {
        return;
      }
    }
    setIsActive(!isActive);
  };
  return (
    <div className="dropdown">
      <div className={isActive ? 'dropdown__container active' : 'dropdown__container'}>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={language === 'Русский'}
            defaultValue={'Русский'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Русский
        </label>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={language === 'Английский'}
            defaultValue={'Английский'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Английский
        </label>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={language === 'Китайский'}
            defaultValue={'Китайский'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Китайский
        </label>
        <label className="dropdown__label">
          <input
            onChange={inputHandler}
            checked={language === 'Испаниский'}
            defaultValue={'Испаниский'}
            name="category"
            className="dropdown__radio"
            type="radio"
          />
          Испаниский
        </label>
      </div>
      <div className="dropdown__selected-label">
        Язык
        <input
          value={language}
          onChange={() => ''}
          placeholder="Язык"
          className="dropdown__selected"
          tabIndex="-1"
        />
      </div>
      <div onClick={dropdownHandler} className="dropdown__selected-mask" tabIndex="0"></div>
    </div>
  );
};

export default Dropdown;
