import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../input/input';
import Dropdown from '../dropdown/dropdown';
import Checkbox from '../checkbox/checkbox';
import Button from '../button/button';
import './form.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [language, setLanguage] = useState('');
  const [isContract, setIsContract] = useState(false);

  const onLanguageHandler = (lang) => {
    setLanguage(lang);
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

  const nameHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const telephoneHandler = (e) => {
    const value = e.target.value;
    setTelephone(value);
  };

  useEffect(() => {
    console.log(isContract);
  }, [isContract]);

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
        <Input value={name} onChange={nameHandler} name="Имя" placeholder="Введите Ваше имя" />
        <Input value={email} onChange={emailHandler} name="Еmail" placeholder="Введите ваш email" />
        <Input
          value={telephone}
          onChange={telephoneHandler}
          name="Номер телефона"
          placeholder="Введите номер телефона"
        />
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
