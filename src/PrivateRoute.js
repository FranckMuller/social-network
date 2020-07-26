import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthed } = rest;

  if (!isAuthed) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
