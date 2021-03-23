export type UserProfileUpdates = {
  name?: string
  surname?: string
  birthDate?: string
  location?: {
    city?: string
    country?: string
  }
  status?: string
}
