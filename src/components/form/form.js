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

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [telephoneDirty, setTelephoneDirty] = useState(false);

  const [nameError, setNameError] = useState('Поле не может быть пустым');
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [telephoneError, setTelephoneError] = useState('Поле не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  const onLanguageHandler = (lang) => {
    setLanguage(lang);
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
        setNameDirty(true);
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
      default: {
        return;
      }
    }
  };
  const nameHandler = (e) => {
    const value = e.target.value;
    const reg = /^[A-Za-zА-ЯЁа-яё -]+$/;
    setName(value);
    if (!reg.test(String(value).toLowerCase())) {
      setNameError('Некорректное имя');
      if (value.length === 0) {
        setNameError('Поле не может быть пустым');
      }
    } else {
      setNameError('');
    }
  };
  const emailHandler = (e) => {
    const value = e.target.value;
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(value);
    if (!reg.test(String(value).toLowerCase())) {
      setEmailError('Некорректный email');
      if (value.length === 0) {
        setEmailError('Поле не может быть пустым');
      }
    } else {
      setEmailError('');
    }
  };
  const telephoneHandler = (e) => {
    const value = e.target.value;
    const reg = /^\+?\d+\(?\d+\)?(\d)+\d+(\d+)/;
    const resultLength = value.replace(/(\+)?(\()?(\)?(\-)?)/g, '');
    setTelephone(value);
    if (resultLength.length !== 11 || !reg.test(String(value).toLowerCase())) {
      setTelephoneError('Недопустимый формат номера');
      if (resultLength.length === 0) {
        setTelephoneError('Поле не может быть пустым');
      }
    } else {
      setTelephoneError('');
    }
  };

  useEffect(() => {
    if (!isContract || nameError || emailError || telephoneError || !language) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [isContract, nameError, emailError, telephoneError, language]);

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <h2 className="form__title">Регистрация</h2>
      <p className="form__text">
        Уже есть аккаунт?&nbsp;&nbsp;
        <Link to="/form-validate/" className="form__title-link">
          Войти
        </Link>
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
        type="text"
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
        type="email"
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
        type="tel"
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
      <Button isDisabled={formValid} name="Зарегистрироваться" />
    </form>
  );
};

export default Form;
