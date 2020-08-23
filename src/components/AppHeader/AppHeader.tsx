import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSignout } from '../../redux/auth/actions';
import { RootState } from '../../redux/store';
import { selectIsAuthed } from '../../redux/auth/selectors';

import styles from './AppHeader.module.scss';
import logo from './logo.svg';

type MapStateProps = {
  isAuthed: boolean;
};

type MapDispatchProps = {
  fetchSignout: () => void;
};

type AppHeaderProps = MapStateProps & MapDispatchProps;

const AppHeader: React.FC<AppHeaderProps> = ({ isAuthed, fetchSignout }) => {
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

const mapStateToProps = (state: RootState) => {
  return {
    isAuthed: selectIsAuthed(state),
  };
};

export default connect<MapStateProps, MapDispatchProps, AppHeaderProps, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
