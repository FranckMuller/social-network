export type ProfilePhotos = {
  large: string
  small: string
}

export type Post = {
  text: string
  created: string
  id: number
}

export type UserProfile = {
  _id: string
  name: string
  surname: string
  email: string
  location: {
    country: string
    city: string
  }
  photos: ProfilePhotos
  following: Array<string> | null
  followers: Array<string> | null
  lastActivity: Date | null
  created: Date | null
  birthDate: string
  status: string
}