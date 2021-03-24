import * as types from './action-types'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import { UserProfileUpdates } from './types'
import { UserProfile, Post } from '../../types'
import { setPhoto, updateAuthState } from '../auth/actions'
import { getUserProfileApi, getPostsApi } from '../../api/profile'
import { updateUserProfileApi, updatePhotoProfileApi, addPostApi, deletePostApi } from '../../api/profile'
import { updateLocalStorageAuthState, getAuthStateUpdates } from '../../utils/auth'

const inferLiteral = <U, T extends U>(arg: T): T => {
  return arg
}

const inferLiteralFormString = <T extends string>(arg: T): T => {
  return inferLiteral<string, T>(arg)
}

export type ProfileActionTypes =
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof updateUserProfile>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof setPostProcessing>
  | ReturnType<typeof setPosts>
  | ReturnType<typeof deletePost>

export type ThunkActionTypes = ThunkAction<Promise<void>, RootState, null, ProfileActionTypes>

const setPostProcessing = (isProcessing: boolean) => {
  return {
    type: inferLiteralFormString(types.SET_POST_PROCESSING),
    payload: {
      isProcessing,
    },
  }
}

const addPost = (post: Post) => {
  return {
    type: inferLiteralFormString(types.ADD_POST),
    payload: {
      post,
    },
  }
}

export const fetchAddPost = (textPost: string): ThunkActionTypes => {
  return async (dispatch) => {
    dispatch(setPostProcessing(true))
    try {
      const post = await addPostApi(textPost)
      if (post) {
        dispatch(addPost(post))
      }
    } catch (error) {
      console.log(error)
      dispatch(setPostProcessing(false))
    }
  }
}

const setUserProfile = (userProfile: UserProfile) => {
  return {
    type: inferLiteralFormString(types.SET_USER_PROFILE),
    payload: {
      userProfile,
    },
  }
}

const updateUserProfile = <T extends object>(userUpdates: T) => {
  return {
    type: inferLiteralFormString(types.UPDATE_USER_PROFILE),
    payload: {
      userUpdates,
    },
  }
}

const setIsFetching = (flag: boolean) => {
  return {
    type: inferLiteralFormString(types.SET_IS_FETCHING),
    payload: {
      flag,
    },
  }
}

export const fetchUserProfile = (userId: string): ThunkActionTypes => {
  return async (dispatch) => {
    const user = await getUserProfileApi(userId)
    dispatch(setUserProfile(user))
    dispatch(setIsFetching(false))
  }
}

export const fetchUserProfileUpdate = (userData: UserProfileUpdates): ThunkActionTypes => {
  return async (dispatch, getState) => {
    const updates = await updateUserProfileApi(userData)
    const authStateUpdates = getAuthStateUpdates(updates, getState().auth)
    if (authStateUpdates !== null) {
      updateLocalStorageAuthState(authStateUpdates)
      // @ts-ignore
      dispatch(updateAuthState(authStateUpdates))
    }
    dispatch(updateUserProfile(updates))
  }
}

type ProfilePhotos = {
  large: string
  small: string
}
export const fetchUpdateProfilePhoto = (profilePhotos: ProfilePhotos): ThunkActionTypes => {
  return async (dispatch: any) => {
    const photos = await updatePhotoProfileApi(profilePhotos)
    dispatch(updateUserProfile({ photos: photos }))
    dispatch(setPhoto(photos.small))
    updateLocalStorageAuthState({ photo: photos.small })
  }
}

const setPosts = (posts: Array<Post>) => {
  return {
    type: inferLiteralFormString(types.SET_POSTS),
    payload: {
      posts
    },
  }
}

export const fetchPosts = (userId: string): ThunkActionTypes => {
  return async (dispatch) => {
    try {
      const posts = await getPostsApi(userId)
      console.log(posts)
      dispatch(setPosts(posts))
    } catch (error) {
      console.log(error)
    }
  }
}

const deletePost = (postId: string) => {
  return {
    type: inferLiteralFormString(types.DELETE_POST),
    payload: {
      postId
    }
  }
}

export const fetchDeletePost = (postId: string): ThunkActionTypes => {
  return async (dispatch) => {
    try {
      await deletePostApi(postId)
      dispatch(deletePost(postId))
    } catch (error) {
      console.log(error)
    }
  }
}
