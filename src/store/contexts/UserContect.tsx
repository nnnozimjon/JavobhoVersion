/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

interface User {
  userId: number
  username: string
  fullname: string
  description: string
  verified: boolean
  avatar: string
  splashImage: string
  createdAt: string
}

interface UserContextValue {
  user: User
  setUser: (newUser: Partial<User>) => void
}

const defaultUser: User = {
  userId: 0,
  username: '',
  fullname: '',
  description: '',
  verified: false,
  avatar: '',
  splashImage: '',
  createdAt: '',
}

const UserContext = createContext<UserContextValue>({
  user: defaultUser,
  setUser: () => {},
})

export function useUser() {
  return useContext(UserContext)
}

interface Props {
  children: React.ReactNode
}

export function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<User>(defaultUser)

  const updateUser = (newUser: Partial<User>) =>
    setUser(prevUser => ({ ...prevUser, ...newUser }))

  const token = Cookies.get('access_token') || ''

  const handleSetUser = (token: string) => {
    const decodedToken: Partial<User> = token
      ? jwtDecode(token)
      : {
          userId: 0,
          username: '',
          fullname: '',
          description: '',
          verified: false,
          avatar: '',
          splashImage: '',
          createdAt: '',
        }
    updateUser(decodedToken)
  }

  useEffect(() => {
    if (token) {
      handleSetUser(token)
    }
  }, [token])

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
