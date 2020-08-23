import { RootState } from '../store';

export const selectAuthedUserName = (state: RootState) => {
  return state.auth.name;
};

export const selectAuthedUserSurname = (state: RootState) => {
  return state.auth.surname;
};
export const selectAuthedUserFullName = (state: RootState) => {
  return `${state.auth.name} ${state.auth.surname}`;
};

export const selectAuthedUserId = (state: RootState) => {
  return state.auth.id;
};

export const selectIsAuthed = (state: RootState) => {
  return state.auth.isAuthed;
};

export const selectAccessToken = (state: RootState) => {
  return state.auth.accessToken;
};
