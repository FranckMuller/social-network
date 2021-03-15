import types, {
  SET_AUTH_DATA,
  CLEAR_AUTH_STATE,
  UPDATE_AUTH_STATE,
  SET_IS_PROCESSING,
  SET_AJAX_ERROR,
  SET_PHOTO
} from './action-types'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'

export type AuthState = {
  id: null | string
  name: null | string
  email: null | string
  photo: null | string
  surname: null | string
  accessToken: null | string
  isAuthed: boolean
  isProcessing: boolean
  serverError: string[] | null
}

export type AuthStateUpdates = {
  name?: string
  surname?: string
}

export type AuthData = {
  name: string
  surname: string
  email: string
}

export type LoginData = {
  email: string
  password: string
}

export type SetAuthData = {
  type: typeof types.SET_AUTH_DATA
  payload: {
    authData: AuthData
  }
}

export type UpdateAuthState = {
  type: typeof UPDATE_AUTH_STATE
  payload: {
    updates: AuthStateUpdates
  }
}

type ClearAuthState = {
  type: typeof CLEAR_AUTH_STATE
}

type SetIsProcessing = {
  type: typeof SET_IS_PROCESSING
}

type setAjaxError = {
  type: typeof SET_AJAX_ERROR
  payload: {
    error: string
  }
}

export type setPhoto = {
  type: typeof SET_PHOTO
  payload: {
    photo: string
  }
}

export type AuthAction =
  | SetAuthData
  | ClearAuthState
  | UpdateAuthState
  | SetIsProcessing
  | setAjaxError
  | setPhoto
export type AuthThunk = ThunkAction<Promise<void>, RootState, null, AuthAction>
