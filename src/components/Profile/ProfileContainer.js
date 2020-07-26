import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchUserProfile } from '../../redux/profile/actions';
import { selectUserProfile } from '../../redux/profile/selectors';
import { selectAuthedUserId } from '../../redux/auth/selectors';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import withMappedRouterProps from '../hoc/WithMappedRouterProps';

const ProfileContainer = (props) => {
  const [isFetchingProfile, setIsFetchingProfile] = useState(true);
  const [userId, setUserId] = useState(null);

  const onFetchUserProfile = (userId) => {
    if (!userId) return;
    setIsFetchingProfile(true);
    props.fetchUserProfile(userId).then(() => {
      setIsFetchingProfile(false);
    });
  };

  useEffect(() => {
    const userId = props.paramUserId ? props.paramUserId : props.userId;
    setUserId(userId);
  }, [props.paramUserId, props.userId]);

  useEffect(() => {
    onFetchUserProfile(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <>{isFetchingProfile ? <Preloader /> : <Profile {...props} />}</>;
};

const mapStateToProps = (state) => {
  return {
    userProfile: selectUserProfile(state),
    userId: selectAuthedUserId(state),
  };
};

const mapRouterProps = (props) => {
  return {
    paramUserId: props.match.params.userId,
  };
};

const mapDispatchToProps = {
  fetchUserProfile,
};

export default compose(
  withMappedRouterProps(mapRouterProps),
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
