export const selectUserProfile = (state) => {
  return state.profile.userProfile;
};

export const selectEditProfileFormDefaultValues = (state) => {
  if (state.profile.userProfile) {
    const { name, surname, birthDate, location } = state.profile.userProfile;
    return { name, surname, birthDate, location };
  }
};
