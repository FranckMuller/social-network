import { CHANGE_NEW_POST_MESSAGE, ADD_POST, SET_USER_PROFILE, UPDATE_USER_PROFILE } from './constants';
import { ProfileAction, UserProfile, ProfileThunk, UserProfileUpdates } from './types';
import { updateAuthState } from '../auth/actions';
import { getUserProfileApi } from '../../api/users';
import { updateUserProfileApi, updatePhotoProfileApi } from '../../api/profile';
import { updateLocalStorageAuthState, getAuthStateUpdates } from '../../utils/auth';

export const changeNewPostMessage = (value: string): ProfileAction => {
  return {
    type: CHANGE_NEW_POST_MESSAGE,
    payload: {
      value,
    },
  };
};

export const addPost = (): ProfileAction => {
  return {
    type: ADD_POST,
  };
};

const setUserProfile = (userProfile: UserProfile): ProfileAction => {
  return {
    type: SET_USER_PROFILE,
    payload: {
      userProfile,
    },
  };
};

const updateUserProfile = (userUpdates: {}): ProfileAction => {
  return {
    type: UPDATE_USER_PROFILE,
    payload: {
      userUpdates,
    },
  };
};

export const fetchUserProfile = (userId: string): ProfileThunk => {
  return async (dispatch) => {
    const user = await getUserProfileApi(userId);
    dispatch(setUserProfile(user));
  };
};

export const fetchUserProfileUpdate = (userData: UserProfileUpdates): ProfileThunk => {
  return async (dispatch, getState) => {
    const updates = await updateUserProfileApi(userData);
    const authStateUpdates = getAuthStateUpdates(updates, getState().auth);
    if (authStateUpdates !== null) {
      updateLocalStorageAuthState(authStateUpdates);
      // @ts-ignore
      dispatch(updateAuthState(authStateUpdates));
    }
    dispatch(updateUserProfile(updates));
  };
};

export const fetchUpdateProfilePhoto = (profilePhotos: any) => {
  return async (dispatch: any) => {
    const photos = await updatePhotoProfileApi(profilePhotos);
    updateLocalStorageAuthState({ miniature: photos.small });
    dispatch(updateAuthState({ miniature: photos.small }));
    dispatch(updateUserProfile({ photos: photos }));
  };
};
