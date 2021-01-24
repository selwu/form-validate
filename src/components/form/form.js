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

  const [nameDirty, setnameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [telephoneDirty, setTelephoneDirty] = useState(false);
  const [languageDirty, setLanguageDirty] = useState(false);

  const [nameError, setNameError] = useState('Поле не может быть пустым');
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [telephoneError, setTelephoneError] = useState('Поле не может быть пустым');

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

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name': {
        setnameDirty(true);
        break;
      }
      case 'email': {
        setEmailDirty(true);
        break;
      }
      case 'telephone': {
        setTelephoneDirty(true);
        break;
      }
    }
  };
  const nameHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const emailHandler = (e) => {
    const value = e.target.value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(value);
    if (!re.test(String(value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };
  const telephoneHandler = (e) => {
    const value = e.target.value;
    const re = /^(\+\d*)(9\d{9}|\(9\d\d\)\s?\d{3}-\d{2}-\d{2}|\s9\d{2}-\d{3}-\d{2}-\d{2})$/;
    setTelephone(value);
    if (!re.test(String(value).toLowerCase())) {
      setTelephoneError('Недопустимый формат номера');
    } else {
      setTelephoneError('');
    }
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
          <Link className="form__title-link">Войти</Link>
        </p>
        <Input
          valueDirty={nameDirty}
          errorMsg={nameError}
          name="name"
          value={name}
          onChange={nameHandler}
          onBlur={blurHandler}
          title="Имя"
          placeholder="Введите Ваше имя"
        />
        <Input
          valueDirty={emailDirty}
          errorMsg={emailError}
          name="email"
          value={email}
          onChange={emailHandler}
          onBlur={blurHandler}
          title="Еmail"
          placeholder="Введите ваш email"
        />
        <Input
          valueDirty={telephoneDirty}
          errorMsg={telephoneError}
          name="telephone"
          value={telephone}
          onChange={telephoneHandler}
          onBlur={blurHandler}
          title="Номер телефона"
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
