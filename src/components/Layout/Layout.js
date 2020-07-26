import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import { selectIsAuthed } from '../../redux/auth/selectors';
import PrivateRoute from '../../PrivateRoute';
import Navbar from '../Navbar/Navbar';
import ProfileContainer from '../Profile/ProfileContainer';
import Dialogs from '../Dialogs/Dialogs';
import UsersContainer from '../Users/UsersContainer';
import EditProfileFormContainer from '../Profile/EditProfileForm/EditProfileFormContainer';

import styles from './Layout.module.scss';

const NotFoundPage = (props) => {
  return <div>not found page</div>;
};

const Layout = (props) => {
  if (props.location.pathname === '/' && props.isAuthed) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={`${styles.mainContainer} container`}>
      {props.isAuthed && <Navbar />}
      <div className={styles.content}>
        <Switch>
          <PrivateRoute
            exact
            path="/profile/edit"
            component={EditProfileFormContainer}
          />
          <PrivateRoute path="/profile/:userId?" component={ProfileContainer} />
          <PrivateRoute path="/dialogs" component={Dialogs} />
          <PrivateRoute path="/users" component={UsersContainer} />
          <PrivateRoute path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthed: selectIsAuthed(state),
  };
};

export default connect(mapStateToProps)(Layout);