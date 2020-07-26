import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSignout } from '../../redux/auth/actions';

import styles from './AppHeader.module.scss';
import logo from './logo.svg';

const AppHeader = ({ isAuthed, fetchSignout }) => {
  return (
    <div className={styles.appHeader}>
      <div className="container">
        <div className={styles.logo}>
          <img src={logo} alt="логотип" />
          <span>In-React</span>
        </div>

        {isAuthed ? (
          <button onClick={fetchSignout}>Выйти</button>
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
  );
};

const mapDispatchToProps = {
  fetchSignout,
};

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
