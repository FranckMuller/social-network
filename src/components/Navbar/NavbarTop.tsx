import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthedUserFullName } from '../../redux/auth/selectors';
import { RootState } from '../../redux/store';

import styles from './Navbar.module.scss';
import defaultMiniature from '../../assets/images/user-miniature.svg';

type MapStateProps = {
  fullname: string;
  photo: string | null;
};

const NavbarTop: React.FC<MapStateProps> = ({ fullname, photo }) => {
  return (
    <div className={styles.navbarTop}>
      <div className={styles.photo}>
        <img src={photo ? photo : defaultMiniature} alt="фото" />
      </div>
      <div>
        <div className={styles.userName}>{fullname}</div>
        <div className={styles.editLink}>
          <NavLink to="/profile/edit">редактировать</NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    fullname: selectAuthedUserFullName(state),
    photo: state.auth.miniature,
  };
};

export default connect<MapStateProps, {}, {}, RootState>(mapStateToProps)(NavbarTop);
