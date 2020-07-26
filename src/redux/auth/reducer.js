import { SET_AUTH_DATA, CLEAR_AUTH_STATE } from './constants';

export const initialState = {
  id: null,
  name: null,
  email: null,
  surname: null,
  accessToken: null,
  isAuthed: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...payload.authData,
        isAuthed: true,
      };

    case CLEAR_AUTH_STATE:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
