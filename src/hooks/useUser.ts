import User from '@/interfaces/user.interface'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { useState, useEffect } from 'react'

const defaultState = {
  userId: 0,
  username: '',
  fullname: '',
  description: '',
  verified: false,
  avatar: '',
  splashImage: '',
  createdAt: '',
}
export const useUser = () => {
  const [user, setUser] = useState<Partial<User>>(defaultState)

  const handleSetUser = (token: string) => {
    const decodedToken: Partial<User> = token ? jwtDecode(token) : defaultState
    setUser(prev => ({ ...prev, ...decodedToken }))
  }

  useEffect(() => {
    const token = Cookies.get('access_token') || ''
    handleSetUser(token)
  }, [])

  return { user }
}
