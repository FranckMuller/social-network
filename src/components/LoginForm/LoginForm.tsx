import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { FormControlInput } from '../common/FormControls';
import classNames from 'classnames';

import styles from './LoginForm.module.scss';
import { LoginData } from '../../redux/auth/types';

type IjectedProps = {
  isLoading: boolean;
  validators: Array<any>;
};

type LoginFormProps = IjectedProps & InjectedFormProps<LoginData, IjectedProps>;

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, isLoading, validators, ...props }) => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.formWrap}>
        <h3 className={`${styles.title} text-center`}>Заполните форму для входа</h3>
        <form onSubmit={handleSubmit}>
          <div className={classNames(styles.formGroup, styles.email, 'form-group')}>
            <label>Email</label>
            <Field
              component={FormControlInput}
              className={styles.inputWrap}
              errorClassName={styles.error}
              name="email"
              type="email"
              placeholder="Введите ваш email"
              validate={validators}
            />
          </div>
          <div className={classNames(styles.formGroup, styles.password, 'form-group')}>
            <label>Пароль</label>
            <Field
              component={FormControlInput}
              className={styles.inputWrap}
              errorClassName={styles.error}
              name="password"
              type="password"
              placeholder="Введите ваш пароль"
              validate={validators}
            />
          </div>
          {props.error && <span className={styles.serverError}>{props.error}</span>}
          <div className={styles.btnWrap}>
            <button disabled={isLoading} type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm<LoginData, IjectedProps>({ form: 'login' })(LoginForm);