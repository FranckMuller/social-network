import { SET_AUTH_DATA, CLEAR_AUTH_STATE, UPDATE_AUTH_STATE } from './constants';
import { AuthState } from './types';
import { AuthAction } from './types';

export const initialState: AuthState = {
  id: null,
  name: null,
  email: null,
  surname: null,
  accessToken: null,
  isAuthed: false,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload.authData,
        isAuthed: true,
      };

    case UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.payload.updates,
      };

    case CLEAR_AUTH_STATE:
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
