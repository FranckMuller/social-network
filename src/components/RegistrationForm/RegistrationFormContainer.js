import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { fetchRegistration } from '../../redux/auth/actions';

import RegistrationForm from './RegistrationForm';

const RegistrationFormContainer = ({
  fetchRegistration,
  isAuthed,
  history,
}) => {
  const submitForm = (data) => {
    fetchRegistration(data).then((res) => {
      history.push('profile/edit');
    });
  };

  return (
    <>
      {isAuthed ? (
        <Redirect to="/profile" />
      ) : (
        <RegistrationForm onSubmit={submitForm} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};

const mapDispatchToProps = {
  fetchRegistration,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(RegistrationFormContainer);
