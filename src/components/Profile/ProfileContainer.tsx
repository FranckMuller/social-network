import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { fetchUserProfile } from '../../redux/profile/actions';
import { selectUserProfile } from '../../redux/profile/selectors';
import { selectAuthedUserId } from '../../redux/auth/selectors';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import withMappedRouterProps from '../hoc/WithMappedRouterProps';
import { UserProfile } from '../../redux/profile/types';
import { RootState } from '../../redux/store';

type OwnProps = {
  urlParamUserId: string | undefined;
};

type MapStateProps = {
  userProfile: UserProfile;
  authedUserId: string | null;
};

type MapDispatchProps = {
  fetchUserProfile: (userId: string) => void;
};

type ProfileContainerProps = OwnProps & MapStateProps & MapDispatchProps;

const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {
  const [isFetchingProfile, setIsFetchingProfile] = useState(true);

  useEffect(() => {
    if (props.userProfile) {
      setIsFetchingProfile(false);
    }
  }, [props.userProfile]);

  useEffect(() => {
    const userId = props.urlParamUserId ? props.urlParamUserId : props.authedUserId;
    if (userId) {
      setIsFetchingProfile(true);
      props.fetchUserProfile(userId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.urlParamUserId]);

  return (
    <>
      {isFetchingProfile ? (
        <Preloader />
      ) : (
        <Profile authedUserId={props.authedUserId} urlParamUserId={props.urlParamUserId} {...props} />
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    userProfile: selectUserProfile(state),
    authedUserId: selectAuthedUserId(state),
  };
};

const mapDispatchToProps = {
  fetchUserProfile,
};

const mapRouterProps = (props: any) => {
  return {
    urlParamUserId: props.match.params.userId,
  };
};

export default compose(
  withMappedRouterProps(mapRouterProps),
  connect<MapStateProps, MapDispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)
)(ProfileContainer);
