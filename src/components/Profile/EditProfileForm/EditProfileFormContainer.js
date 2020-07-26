import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectEditProfileFormDefaultValues } from '../../../redux/profile/selectors';
import { selectAuthedUserId } from '../../../redux/auth/selectors';
import {
  fetchUserProfile,
  fetchUpdateUserProfile,
} from '../../../redux/profile/actions';
import Preloader from '../../Preloader/Preloader';
import EditProfileForm from './EditProfileForm';
import withMappedRouterProps from '../../hoc/WithMappedRouterProps';

const EditProfileFormContainer = ({
  fetchUserProfile,
  fetchUpdateUserProfile,
  userId,
  ...props
}) => {
  const [isFetchingProfile, setIsFetchingProfile] = useState(true);

  useEffect(() => {
    fetchUserProfile(userId).then(() => {
      setIsFetchingProfile(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitForm = (userData) => {
    fetchUpdateUserProfile(userData);
  };

  return (
    <>
      {isFetchingProfile ? (
        <Preloader />
      ) : (
        <EditProfileForm {...props} onSubmit={submitForm} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialValues: selectEditProfileFormDefaultValues(state),
    userId: selectAuthedUserId(state),
  };
};

const mapDispatchToProps = {
  fetchUserProfile,
  fetchUpdateUserProfile,
};

export default compose(
  withMappedRouterProps(),
  connect(mapStateToProps, mapDispatchToProps)
)(EditProfileFormContainer);
