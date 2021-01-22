import React from 'react';
import './form.scss';
import Input from '../input/input';
import Dropdown from '../dropdown/dropdown';
import Checkbox from '../checkbox/checkbox';

const Form = () => {
  return (
    <>
      <form action="">
        <div>
          <h2></h2>
          <p></p>
          <Input />
          <Input />
          <Input />
          <Dropdown />
          <label>
            Принимаю
            <a target="_blank">условия</a>
            использования
            <Checkbox />
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
