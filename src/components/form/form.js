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
      <form action="" className="form">
        <h2 className="form__title">Регистрация</h2>
        <p className="form__text">
          Уже есть аккаунт?&nbsp;&nbsp;
          <Link to="/" className="form__title-link">
            Войти
          </Link>
        </p>
        <Input name="Имя" placeholder="Введите Ваше имя" />
        <Input name="Еmail" placeholder="Введите ваш email" />
        <Input name="Номер телефона" placeholder="Введите номер телефона" />
        <Dropdown />
        <label className="form__checkbox">
          <Checkbox />
          <span className="form__contract">
            Принимаю&nbsp;
            <a href="#" target="_blank" className="form__checkbox-link">
              условия
            </a>
            &nbsp;использования
          </span>
        </label>
        <Button name="Зарегистрироваться" />
      </form>
    </>
  );
};

export default Form;
