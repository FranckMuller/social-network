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
