import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthedUserFullName } from '../../redux/auth/selectors';

import styles from './Navbar.module.scss';
import avatar from '../../assets/images/user.svg';

const NavbarTop = ({ userName, ...props }) => {
  return (
    <div className={styles.navbarTop}>
      <div className={styles.photo}>
        <img src={avatar} alt="фото" />
      </div>
      <div>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.editLink}>
          <NavLink to="/profile/edit">редактировать</NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: selectAuthedUserFullName(state),
  };
};

export default connect(mapStateToProps)(NavbarTop);
