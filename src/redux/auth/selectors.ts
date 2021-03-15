import { RootState } from '../store'

export const selectAuthedUserName = (state: RootState) => {
  return state.auth.name
}

export const selectAuthedUserSurname = (state: RootState) => {
  return state.auth.surname
}
export const selectNavbarAuthedUserInfo = (state: RootState) => {
  return {
    fullname: `${state.auth.name} ${state.auth.surname}`,
    photo: state.auth.photo
  }
}

export const selectAuthedUserId = (state: RootState): string | null => {
  return state.auth.id
}

export const selectIsAuthed = (state: RootState) => {
  return state.auth.isAuthed
}

export const selectAccessToken = (state: RootState) => {
  return state.auth.accessToken
}

export const selectAuthState = (state: RootState) => {
  const { accessToken, ...auth } = state.auth
  return auth
}
