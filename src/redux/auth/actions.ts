import types, {
  CLEAR_AUTH_STATE,
  UPDATE_AUTH_STATE,
  SET_IS_PROCESSING,
  SET_AJAX_ERROR,
  SET_PHOTO
} from './action-types'
import { signinApi, signoutApi, signupApi } from '../../api/auth'
import { stopSubmit } from 'redux-form'
import { AuthAction, AuthData, AuthThunk, LoginData } from './types'
import { updateLocalStorageAuthState } from '../../utils/auth'

const setProcessing = (): AuthAction => {
  return {
    type: SET_IS_PROCESSING,
  }
}

const setAjaxErrors = (error: string): AuthAction => {
  return {
    type: SET_AJAX_ERROR,
    payload: {
      error,
    },
  }
}

export const updateAuthState = (updates: {}): AuthAction => {
  return {
    type: UPDATE_AUTH_STATE,
    payload: {
      updates,
    },
  }
}

const setAuthData = (authData: AuthData): AuthAction => {
  return {
    type: types.SET_AUTH_DATA,
    payload: {
      authData,
    },
  }
}

const clearAuthState = (): AuthAction => {
  return {
    type: CLEAR_AUTH_STATE,
  }
}

export const fetchSignup = (authData: AuthData): AuthThunk => {
  return async (dispatch) => {
    try {
      const data = await signupApi(authData)
      updateLocalStorageAuthState(data)
      dispatch(setAuthData(data))
    } catch (error) {
      dispatch(stopSubmit('registration', { _error: error.message }))
    }
  }
}

export const fetchSignin = (loginData: LoginData): AuthThunk => {
  return async (dispatch) => {
    dispatch(setProcessing())
    try {
      const data = await signinApi(loginData)
      updateLocalStorageAuthState(data)
      dispatch(setAuthData(data))
    } catch (error) {
      dispatch(setAjaxErrors(error.message))
    }
  }
}

export const fetchSignout = (): AuthThunk => {
  return async (dispatch) => {
    try {
      await signoutApi()
      localStorage.removeItem('authState')
      dispatch(clearAuthState())
    } catch (error) {}
  }
}

export const setPhoto = (photo: string) => {
  return {
    type: SET_PHOTO,
    payload:{
      photo
    }
  }
}

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
