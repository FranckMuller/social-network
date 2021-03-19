import * as types from './action-types'
import { signinApi, signoutApi, signupApi } from '../../api/auth'
import { stopSubmit } from 'redux-form'
import { RootState } from '../store'
import { AuthData, LoginData } from './types'
import { ThunkAction } from 'redux-thunk'
import { updateLocalStorageAuthState } from '../../utils/auth'

const inferLiteral = <U, T extends U>(arg: T): T=> {
  return arg
}

const inferLiteralFormString = <T extends string>(arg: T): T => {
  return inferLiteral<string, T>(arg)
}

// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type AuthActionTypes =
  | ReturnType<typeof setProcessing>
  | ReturnType<typeof setAjaxErrors>
  | ReturnType<typeof updateAuthState>
  | ReturnType<typeof setAuthData>
  | ReturnType<typeof clearAuthState>
  | ReturnType<typeof setPhoto>

export type AuthThunk = ThunkAction<Promise<void>, RootState, null, AuthActionTypes>

export const setPhoto = (photo: string) => {
  return {
    type: inferLiteralFormString(types.SET_PHOTO),
    payload: {
      photo,
    },
  }
}

const setProcessing = () => {
  return {
    type: inferLiteralFormString(types.SET_IS_PROCESSING),
  }
}

const setAjaxErrors = (error: string) => {
  return {
    type: inferLiteralFormString(types.SET_AJAX_ERROR),
    payload: {
      error,
    },
  }
}

export const updateAuthState = <T extends object>(updates: T) => {
  return {
    type: inferLiteralFormString(types.UPDATE_AUTH_STATE),
    payload: {
      updates,
    },
  }
}

const setAuthData = (authData: AuthData) => {
  return {
    type: inferLiteralFormString(types.SET_AUTH_DATA),
    authData,
  }
}

const clearAuthState = () => {
  return {
    type: inferLiteralFormString(types.CLEAR_AUTH_STATE),
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
