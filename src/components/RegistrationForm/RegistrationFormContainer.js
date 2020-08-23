import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { fetchSignup } from '../../redux/auth/actions';

import RegistrationForm from './RegistrationForm';

const RegistrationFormContainer = ({ fetchSignup, isAuthed, history }) => {
  const submitForm = (data) => {
    fetchSignup(data);
  };

  return <>{isAuthed ? <Redirect to="/profile" /> : <RegistrationForm onSubmit={submitForm} />}</>;
};

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};

const mapDispatchToProps = {
  fetchSignup,
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(RegistrationFormContainer);
