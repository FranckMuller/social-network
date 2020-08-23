import { RootState } from '../store';

export const selectUserProfile = (state: RootState) => {
  return state.profile.userProfile;
};

export const selectEditProfileFormDefaultValues = (state: RootState) => {
  if (state.profile.userProfile) {
    const { name, surname, birthDate, location } = state.profile.userProfile;
    return { name, surname, birthDate, location };
  }
};

export const selectProfileStatus = (state: RootState) => {
  return state.profile.userProfile.status;
};
