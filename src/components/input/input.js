import React from 'react';
import './input.scss';

const Input = ({ name, type, value, onChange, placeholder }) => {
  return (
    <>
      <label>
        {name}
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      </label>
    </>
  );
};

export default Input;
