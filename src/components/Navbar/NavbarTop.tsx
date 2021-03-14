import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectNavbarAuthedUserInfo } from '../../redux/auth/selectors'

import styles from './Navbar.module.scss'
import defaultMiniature from '../../assets/images/user-miniature.svg'

const NavbarTop: React.FC = () => {
  const { fullname, photo } = useSelector(selectNavbarAuthedUserInfo)

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
  )
}

export default NavbarTop
