import React from 'react';
import './input.scss';

const Input = ({ name, type, value, onChange, placeholder, errorMsg }) => {
  return (
    <div className="input">
      <label className="input__label">
        {name}
        <input
          className="input__item"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
      {errorMsg && <span className="input__error">{errorMsg}</span>}
    </div>
  );
};

export default Input;
