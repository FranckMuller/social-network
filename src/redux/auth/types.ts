import { SET_AUTH_DATA, CLEAR_AUTH_STATE, UPDATE_AUTH_STATE } from './constants';
import { RootState } from '../store';
import { ThunkAction } from 'redux-thunk';

export type AuthState = {
  id: null | string;
  name: null | string;
  email: null | string;
  surname: null | string;
  accessToken: null | string;
  isAuthed: boolean;
};

export type AuthStateUpdates = {
  name?: string;
  surname?: string;
};

export type AuthData = {
  name: string;
  surname: string;
  email: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type SetAuthData = {
  type: typeof SET_AUTH_DATA;
  payload: {
    authData: AuthData;
  };
};

export type UpdateAuthState = {
  type: typeof UPDATE_AUTH_STATE;
  payload: {
    updates: AuthStateUpdates;
  };
};

type ClearAuthState = {
  type: typeof CLEAR_AUTH_STATE;
};

export type AuthAction = SetAuthData | ClearAuthState | UpdateAuthState;
export type AuthThunk = ThunkAction<Promise<void>, RootState, null, AuthAction>;
