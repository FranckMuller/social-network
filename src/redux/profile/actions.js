import {
  CHANGE_NEW_POST_MESSAGE,
  ADD_POST,
  SET_USER_PROFILE,
  UPDATE_USER_PROFILE,
} from './constants';
import { setAuthData } from '../auth/actions';
import { getUserProfileApi } from '../../api/users';
import { updateUserProfileApi } from '../../api/profile';

export const changeNewPostMessage = (value) => {
  return {
    type: CHANGE_NEW_POST_MESSAGE,
    payload: {
      value,
    },
  };
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const fetchUserProfile = (userId) => {
  return async (dispatch) => {
    const user = await getUserProfileApi(userId);
    dispatch(setUserProfile(user));
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
};

const setUserProfile = (userProfile) => {
  return {
    type: SET_USER_PROFILE,
    payload: {
      userProfile,
    },
  };
};

export const fetchUpdateUserProfile = (userData) => {
  return async (dispatch) => {
    const result = await updateUserProfileApi(userData);
    const updatesUserProfile = result.updates;

    dispatch(updateUserProfile(updatesUserProfile));
    const authState = updateAuthLocalStorageState(updatesUserProfile);
    dispatch(setAuthData(authState));
  };
};

const updateUserProfile = (userUpdates) => {
  return {
    type: UPDATE_USER_PROFILE,
    payload: {
      userUpdates,
    },
  };
};

const updateAuthLocalStorageState = (updates) => {
  const updatedFields = Object.keys(updates);
  let authState = JSON.parse(window.localStorage.getItem('authState'));
  updatedFields.forEach((field) => {
    if (authState[field] && authState[field] !== updates[field]) {
      authState[field] = updates[field];
    }
  });
  localStorage.setItem('authState', JSON.stringify(authState));
  return authState;
};
