import React from 'react';
import './input.scss';

const Input = ({ title, name, type, value, onChange, placeholder, errorMsg, valueDirty, onBlur }) => {
  return (
    <div className="input">
      <label className="input__label">
        {title}
        <input
          className="input__item"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
        />
      </label>
      {(errorMsg && valueDirty) && <span className="input__error">{errorMsg}</span>}
    </div>
  );
};

export default Input;
