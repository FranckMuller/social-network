import { SET_AUTH_DATA, CLEAR_AUTH_STATE, UPDATE_AUTH_STATE } from './constants';
import { signinApi, signoutApi, signupApi } from '../../api/auth';
import { stopSubmit } from 'redux-form';
import { AuthAction, AuthData, AuthThunk, LoginData } from './types';
import { updateLocalStorageAuthState } from '../../utils/auth';

export const updateAuthState = (updates: {}): AuthAction => {
  return {
    type: UPDATE_AUTH_STATE,
    payload: {
      updates,
    },
  };
};

const setAuthData = (authData: AuthData): AuthAction => {
  return {
    type: SET_AUTH_DATA,
    payload: {
      authData,
    },
  };
};

const clearAuthState = (): AuthAction => {
  return {
    type: CLEAR_AUTH_STATE,
  };
};

export const fetchSignup = (authData: AuthData): AuthThunk => {
  return async (dispatch) => {
    try {
      const data = await signupApi(authData);
      updateLocalStorageAuthState(data);
      dispatch(setAuthData(data));
    } catch (error) {
      dispatch(stopSubmit('registration', { _error: error.message }));
    }
  };
};

export const fetchSignin = (loginData: LoginData): AuthThunk => {
  return async (dispatch) => {
    try {
      const data = await signinApi(loginData);
      updateLocalStorageAuthState(data);
      dispatch(setAuthData(data));
    } catch (error) {
      dispatch(stopSubmit('login', { _error: error.message }));
    }
  };
};

export const fetchSignout = (): AuthThunk => {
  return async (dispatch) => {
    try {
      await signoutApi();
      localStorage.removeItem('authState');
      dispatch(clearAuthState());
    } catch (error) {}
  };
};

// export const fetchRegistration = (registrationData) => {
//   return (dispatch) => {
//     const fd = new FormData();
//     for (let key in registrationData) {
//       fd.append(key, registrationData[key]);
//     }
//     signupApi(fd).then((res) => {
//       if (res.data.resultCode === 1) {
//         console.log(res.data);
//       } else {
//         console.log(res.data);
//         localStorage.setItem('authState', JSON.stringify(res.data));
//         dispatch(setAuthData(res.data));
//       }
//     });
//   };
// };
