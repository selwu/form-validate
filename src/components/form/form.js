import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './form.scss';
import Input from '../input/input';
import Dropdown from '../dropdown/dropdown';
import Checkbox from '../checkbox/checkbox';
import Button from '../button/button';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [language, setLanguage] = useState('');
  const [isContract, setIsContract] = useState(false);

  const onLanguageHandler = (lang) => {
    console.log(lang);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      telephone,
      language,
    };
    console.log(data);
  };

  useEffect(() => {});

  return (
    <>
      <form onSubmit={onSubmitHandler} className="form">
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
        <Dropdown onLanguage={onLanguageHandler} />
        <label className="form__checkbox">
          <Checkbox isCheckbox={() => setIsContract(!isContract)} />
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
