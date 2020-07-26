export const selectAuthedUserFullName = (state) => {
  return `${state.auth.name} ${state.auth.surname}`;
};

export const selectAuthedUserId = (state) => {
  return state.auth.id;
};

export const selectIsAuthed = (state) => {
  return state.auth.isAuthed;
};
