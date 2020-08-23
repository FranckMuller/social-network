import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarTop from './NavbarTop';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <NavbarTop />
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/profile">
            Моя страница
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/dialogs">
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/friends">
            Друзья
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/music">
            Музыка
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.active} to="/users">
            Пользователи
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
