import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  selectUserProfile,
  selectAuthUserId,
} from '../../redux/profile/selectors';
import { fetchUserProfile } from '../../redux/profile/actions';
import Preloader from '../Preloader/Preloader';

const withFetchingAuthedProfileData = (Component) => {
  const WithFetchingAuthedProfileData = ({ fetchUserProfile, ...props }) => {
    const [isFetchingProfile, setIsFetchingProfile] = useState(true);

    useEffect(() => {
      fetchUserProfile(props.userId).then(() => {
        setIsFetchingProfile(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{isFetchingProfile ? <Preloader /> : <Component {...props} />}</>;
  };

  const mapStateToProps = (state) => {
    return {
      userProfile: selectUserProfile(state),
      userId: selectAuthUserId(state),
    };
  };

  const mapDispatchToProps = {
    fetchUserProfile,
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithFetchingAuthedProfileData);
};

export default withFetchingAuthedProfileData;
