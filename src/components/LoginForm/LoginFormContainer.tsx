import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchSignin } from '../../redux/auth/actions';
import { requiredFiledCreator } from '../../utils/formValidators';
import { compose } from 'redux';
import withMappedRouterProps from '../hoc/WithMappedRouterProps';
import LoginForm from './LoginForm';
import { LoginData } from '../../redux/auth/types';
import { RootState } from '../../redux/store';

type MapDispatchProps = {
  fetchSignin: (loginData: LoginData) => any;
};

type MapStateProps = {
  isAuthed: boolean;
};

type LoginFormProps = MapDispatchProps & MapStateProps;

const LoginFormContainer: React.FC<LoginFormProps> = ({ fetchSignin, isAuthed, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (loginData: LoginData) => {
    setIsLoading(true);
    fetchSignin(loginData);
  };

  let validators = [];
  validators.push(requiredFiledCreator('Заполните поле'));

  return (
    <>
      {isAuthed ? (
        <Redirect to="/profile" />
      ) : (
        <LoginForm onSubmit={submitForm} validators={validators} isLoading={isLoading} />
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthed: state.auth.isAuthed,
  };
};

const mapDispatchToProps = {
  fetchSignin,
};

export default compose(
  withMappedRouterProps(),
  connect<MapStateProps, MapDispatchProps, LoginFormProps, RootState>(mapStateToProps, mapDispatchToProps)
)(LoginFormContainer);
