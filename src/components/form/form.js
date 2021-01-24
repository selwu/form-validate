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
        <Input
          valueDirty={nameDirty}
          errorMsg={nameError}
          name='name'
          value={name} 
          onChange={nameHandler} title="Имя"
          placeholder="Введите Ваше имя"
             />
        <Input
          valueDirty={emailDirty}
          errorMsg={emailError}
          name='email'
          value={email}
          onChange={emailHandler}
          title="Еmail"
          placeholder="Введите ваш email" />
        <Input
          valueDirty={telephoneDirty}
          errorMsg={telephoneError}
          name='telephone'
          value={telephone}
          onChange={telephoneHandler}
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
