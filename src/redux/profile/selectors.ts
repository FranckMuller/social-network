import { RootState } from '../store'

export const selectProfileState = (state: RootState) => {
  return state.profile
}

export const selectUserPostDataInfo = (state: RootState) => {
  return {
    fullname: `${state.profile.userProfile.name} ${state.profile.userProfile.surname}`,
    photo: state.profile.userProfile.photos.small,
  }
}

export const selectProfilePosts = (state: RootState) => {
  return state.profile.posts
}

export const selectEditProfileFormDefaultValues = (state: RootState) => {
  if (state.profile.userProfile) {
    const { name, surname, birthDate, location } = state.profile.userProfile
    return { name, surname, birthDate, location }
  }
}

export const selectProfileStatus = (state: RootState) => {
  return state.profile.userProfile.status
}
