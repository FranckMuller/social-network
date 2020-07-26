import { SET_AUTH_DATA, CLEAR_AUTH_STATE } from './constants';
import { signinApi, signoutApi, signupApi } from '../../api/auth';
import { stopSubmit } from 'redux-form';

export const setAuthData = (authData) => {
  return {
    type: SET_AUTH_DATA,
    payload: {
      authData,
    },
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

export const fetchRegistration = (registrationData) => {
  return async (dispatch) => {
    try {
      const result = await signupApi(registrationData);
      localStorage.setItem('authState', JSON.stringify(result.data));
      dispatch(setAuthData(result.data));
    } catch (error) {}
  };
};

export const fetchSignin = (loginData) => {
  return (dispatch) => {
    signinApi(loginData)
      .then((res) => {
        if (res.data.resultCode === 1) {
        } else {
          localStorage.setItem('authState', JSON.stringify(res.data));
          dispatch(setAuthData(res.data));
        }
      })
      .catch((err) => {
        dispatch(stopSubmit('login', { _error: err.response.data.errors[0] }));
      });
  };
};

const clearAuthState = () => {
  return {
    type: CLEAR_AUTH_STATE,
  };
};

export const fetchSignout = () => {
  return (dispatch) => {
    signoutApi().then((res) => {
      localStorage.removeItem('authState');
      dispatch(clearAuthState());
    });
  };
};
