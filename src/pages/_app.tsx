import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { getUnixTime } from 'date-fns'

import '@/styles/globals.css'
import store, { SettingsContextProvider } from '@/store'
import Login from './login'
import DesktopLayout from '@/components/layout'
import { UserContextProvider } from '@/store/contexts/UserContect'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const access_token = Cookies.get('access_token') || ''
    setIsLoggedIn(checkToken(access_token))
  }, [])

  function checkToken(token: string) {
    try {
      const decode: any = jwtDecode(token || '')

      const { exp, username, userId } = decode
      return (
        getUnixTime(new Date()) < exp! &&
        username !== undefined &&
        userId !== undefined
      )
    } catch (error) {
      return false
    }
  }

  return (
    <Provider store={store}>
      <UserContextProvider>
        <SettingsContextProvider>
          {isLoggedIn ? (
            <DesktopLayout>
              <InnerApp>
                <div className="h-full overflow-y-scroll scrollbar-hide ">
                  <Component {...pageProps} />
                </div>
              </InnerApp>
            </DesktopLayout>
          ) : (
            <Login />
          )}
        </SettingsContextProvider>
      </UserContextProvider>
    </Provider>
  )
}

const InnerApp: React.FC<any> = ({ children }) => {
  return <>{children}</>
}
