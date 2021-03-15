import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchSignout } from '../../redux/auth/actions'
import { selectIsAuthed } from '../../redux/auth/selectors'

import styles from './AppHeader.module.scss'
import logo from './logo.svg'

const AppHeader: React.FC = () => {
  const isAuthed = useSelector(selectIsAuthed)
  const dispatch = useDispatch()

  const onFetchSignout = () => {
    dispatch(fetchSignout())
  }

  return (
    <div className={styles.appHeader}>
      <div className="container">
        <div className={styles.logo}>
          <img src={logo} alt="логотип" />
          <span>In-React</span>
        </div>

        {isAuthed ? (
          <button onClick={onFetchSignout}>Выйти</button>
        ) : (
          <div className={styles.linkGroup}>
            <NavLink activeClassName={styles.active} to="/login">
              Войти
            </NavLink>
            <NavLink activeClassName={styles.active} to="/registration">
              Зарегистрироваться
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppHeader
