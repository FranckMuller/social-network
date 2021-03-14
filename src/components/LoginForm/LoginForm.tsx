import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { LoginData } from '../../redux/auth/types'
import { loginFormValidationSchema } from '../../utils/formValidators'

import styles from './LoginForm.module.scss'


type LoginFormProps = {
  isProcessing: boolean
  serverError: string[] | null
  onSubmit: (data: LoginData) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isProcessing, serverError }) => {
  const [commonError, setCommonrError] = useState<string | null>(null)
  const { register, handleSubmit, errors } = useForm<LoginData>({
    mode: 'onTouched',
    shouldFocusError: false,
    resolver: yupResolver(loginFormValidationSchema),
  })

  const onFocusInput = () => {
    if (commonError) {
      setCommonrError(null)
    }
  }

  useEffect(() => {
    if (serverError) {
      setCommonrError(serverError[0])
    }
  }, [serverError])

  return (
    <div className={styles.loginForm}>
      <div className={styles.formWrap}>
        <h3 className={`${styles.title} text-center`}>Заполните форму для входа</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classNames(styles.formGroup, styles.email, 'form-group')}>
            <label>Email</label>
            <div className={styles.inputWrap}>
              <input
                onFocus={onFocusInput}
                ref={register({ required: true })}
                className="form-control"
                name="email"
                type="text"
                placeholder="Введите ваш email"
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>
          </div>
          <div className={classNames(styles.formGroup, styles.password, 'form-group')}>
            <label>Пароль</label>
            <div className={styles.inputWrap}>
              <input
                onFocus={onFocusInput}
                ref={register({ required: true })}
                className="form-control"
                name="password"
                type="password"
                placeholder="Введите ваш пароль"
              />
              {errors.password && <span className={styles.error}>{errors.password.message}</span>}
            </div>
          </div>
          {commonError && <span className={styles.serverError}>{commonError}</span>}
          <div className={styles.btnWrap}>
            <button disabled={isProcessing} type="submit" className="btn btn-primary">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
