interface user {
  userId: number
  fullname: string
  username: string
  description: string
  verified: boolean
  createdAt: string
  avatar: string
}

type User = user

export default User
