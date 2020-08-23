import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormControlInput } from '../common/FormControls';

import styles from './RegistrationForm.module.scss';

const RegistrationForm = ({ handleSubmit, ...props }) => {
  return (
    <div className={styles.registrationForm}>
      <div className={styles.formWrap}>
        <h3 className={`${styles.title} text-center`}>Заполните форму для регистрации</h3>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className={`${styles.formGroup} ${styles.name}  form-group`}>
            <label>Имя</label>
            <Field
              component={FormControlInput}
              className={styles.inputWrap}
              name="name"
              type="text"
              placeholder="Введите ваше имя"
            />
          </div>
          <div className={`${styles.formGroup} ${styles.surname} form-group`}>
            <label>Фамилия</label>
            <Field
              component={FormControlInput}
              className={styles.inputWrap}
              name="surname"
              type="text"
              placeholder="Введите вашу фмилию"
            />
          </div>
          <div className={`${styles.formGroup} ${styles.email} form-group`}>
            <label>Email</label>
            <Field
              component={FormControlInput}
              className={styles.inputWrap}
              name="email"
              type="email"
              placeholder="Введите ваш email"
            />
          </div>
          <div className={`${styles.formGroup} ${styles.password} form-group`}>
            <label>Пароль</label>
            <Field
              component={FormControlInput}
              className={styles.inputWrap}
              name="password"
              type="password"
              placeholder="Придумайте пароль"
            />
          </div>
          {/* <div
            className={`${styles.formGroup} ${styles.photo} ${
              props.error ? styles.error : ''
            } form-group`}
          >
            <label>Фото</label>
            <Field
              value={null}
              component={FormControlFileInput}
              className={styles.inputWrap}
              name="photo"
              type="file"
              placeholder="Загрузите ваше фото"
            />
          </div> */}
          {props.error && <span className={styles.serverError}>{props.error}</span>}
          <div className={styles.btnWrap}>
            <button type="submit" className="btn btn-primary">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: 'registration' })(RegistrationForm);
