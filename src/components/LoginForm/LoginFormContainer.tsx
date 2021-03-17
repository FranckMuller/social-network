import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchSignin } from '../../redux/auth/actions'
import LoginForm from './LoginForm'
import { LoginData } from '../../redux/auth/types'
import { RootState } from '../../redux/store'

type State = {
  isAuthed: boolean
  isProcessing: boolean
  serverError: string[] | null
}

const LoginFormContainer: React.FC = () => {
  const { isProcessing, isAuthed, serverError } = useSelector<RootState, State>(
    (state) => state.auth,
  )
  const dispatch = useDispatch()

  const submitForm = (loginData: LoginData): void => {
    dispatch(fetchSignin(loginData))
  }

  return (
    <>
      {isAuthed ? (
        <Redirect to="/profile" />
      ) : (
        <LoginForm serverError={serverError} onSubmit={submitForm} isProcessing={isProcessing} />
      )}
    </>
  )
}

export default LoginFormContainer
