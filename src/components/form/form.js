import React from 'react';
import { Link } from 'react-router-dom';
import './form.scss';
import Input from '../input/input';
import Dropdown from '../dropdown/dropdown';
import Checkbox from '../checkbox/checkbox';
import Button from '../button/button';

const Form = () => {
  return (
    <>
      <form action="">
        <div>
          <h2>Регистрация</h2>
          <p>
            Уже есть аккаунт?
            <Link>Войти</Link>
          </p>
          <Input />
          <Input />
          <Input />
          <Dropdown />
          <label>
            <Checkbox />
            Принимаю
            <a target="_blank">условия</a>
            использования
          </label>
        </div>
        <Button name="Зарегистрироваться" />
      </form>
    </>
  );
};

export default Form;
