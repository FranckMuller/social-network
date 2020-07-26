import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormControlInput,
  FormControlDatePicker,
} from '../../common/FormControls';
import LocationSelectContainer from '../../common/LocationSelect/LocationSelectContainer';
import classNames from 'classnames';

import styles from './EditProfileForm.module.scss';

const EditProfileForm = ({ handleSubmit, defaultValues, ...props }) => {
  return (
    <div className={styles.editProfileForm}>
      <h3>Настройки профиля</h3>
      <form onSubmit={handleSubmit}>
        <div
          className={classNames(styles.formGroup, styles.email, 'form-group', {
            [styles.error]: props.error,
          })}
        >
          <label>Имя</label>
          <Field
            component={FormControlInput}
            className={styles.inputWrap}
            errorClassName={styles.error}
            placeholder="Введите ваше имя"
            name="name"
            type="text"
            customValue="123"
          />
        </div>

        <div
          className={classNames(styles.formGroup, styles.email, 'form-group', {
            [styles.error]: props.error,
          })}
        >
          <label>Фамилия</label>
          <Field
            component={FormControlInput}
            className={styles.inputWrap}
            errorClassName={styles.error}
            placeholder="Введите вашу фамилию"
            name="surname"
            type="text"
          />
        </div>

        <div
          className={classNames(styles.formGroup, styles.email, 'form-group', {
            [styles.error]: props.error,
          })}
        >
          <label>Дата рождения</label>

          <Field
            component={FormControlDatePicker}
            formatDate="ll"
            showToday={false}
            inputReadOnly={true}
            name="birthDate"
            placeholder="Выберите дату"
          />
        </div>

        <div
          className={classNames(styles.formGroup, styles.email, 'form-group', {
            [styles.error]: props.error,
          })}
        >
          <label>Страна / город</label>

          <Field
            component={LocationSelectContainer}
            className={styles.locationSelect}
            name="location"
            type="select"
          />
        </div>

        <div className={styles.btnWrap}>
          <button className="btn-primary">Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'editProfile' })(EditProfileForm);
