import React, { useState, useEffect } from 'react';
import ProfileStatus from './ProfileStatus';
import { connect } from 'react-redux';
import { fetchUserProfileUpdate } from '../../../../redux/profile/actions';
import { RootState } from '../../../../redux/store';
import { selectProfileStatus } from '../../../../redux/profile/selectors';

type MapStateProps = {
  status: string;
};

type MapDispatchProps = {
  fetchUserProfileUpdate: (userData: { status: string }) => void;
};

type ProfileStatusContainerProps = MapStateProps & MapDispatchProps;

const ProfileStatusContainer: React.FC<ProfileStatusContainerProps> = ({ status, fetchUserProfileUpdate }) => {
  const [isEditMode, setIseditmode] = useState(false);
  const [localStatus, setStatus] = useState('');
  const [inputStatusValue, setInputStatusValue] = useState('');

  const changeStatus = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setInputStatusValue(e.currentTarget.value);
  };

  const focusInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  const activateEditMode = () => {
    setIseditmode(true);
  };

  const deactivateEditMode = () => {
    setIseditmode(false);
  };

  const updateStatus = () => {
    if (inputStatusValue !== null) {
      fetchUserProfileUpdate({ status: inputStatusValue });
      setIseditmode(false);
    }
  };

  useEffect(() => {
    if (status !== '') {
      setStatus(status);
      setInputStatusValue(status);
    }
  }, [status]);

  return (
    <ProfileStatus
      onChangeStatus={changeStatus}
      onActivateEditMode={activateEditMode}
      onDeactivateEditMode={deactivateEditMode}
      onFocusInput={focusInput}
      status={localStatus}
      isEditMode={isEditMode}
      inputValue={inputStatusValue}
      onUpdateStatus={updateStatus}
    />
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    status: selectProfileStatus(state),
  };
};

const mapDispatchToProps = {
  fetchUserProfileUpdate,
};

export default connect<MapStateProps, MapDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(ProfileStatusContainer);
