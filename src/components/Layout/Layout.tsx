import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Switch, useLocation } from 'react-router-dom'
import { selectIsAuthed } from '../../redux/auth/selectors'
import PrivateRoute from '../../PrivateRoute'
import Navbar from '../Navbar/Navbar'
import ProfileContainer from '../Profile/ProfileContainer'
import Dialogs from '../Dialogs/Dialogs'
import UsersContainer from '../Users/UsersContainer'
import EditProfileFormContainer from '../Profile/EditProfileForm/EditProfileFormContainer'

import styles from './Layout.module.scss'

const NotFoundPage = () => {
  return <div>not found page</div>
}

const Layout = () => {
  const isAuthed = useSelector(selectIsAuthed)
  const { pathname } = useLocation()

  if (pathname === '/' && isAuthed) {
    return <Redirect to="/profile" />
  }

  return (
    <div className={`${styles.mainContainer} container`}>
      {isAuthed && <Navbar />}
      <div className={styles.content}>
        <Switch>
          <PrivateRoute exact path="/profile/edit" component={EditProfileFormContainer} />
          <PrivateRoute path="/profile/:userId?" component={ProfileContainer} />
          <PrivateRoute path="/dialogs" component={Dialogs} />
          <PrivateRoute path="/users" component={UsersContainer} />
          {/* <PrivateRoute path="/friends" component={UsersContainer} /> */}
          <PrivateRoute path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  )
}
export default Layout
