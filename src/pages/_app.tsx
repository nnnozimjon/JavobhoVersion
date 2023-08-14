import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { getUnixTime } from 'date-fns'

import '@/styles/globals.css'
import store, { SettingsContextProvider } from '@/store'
import DesktopLayout from '@/components/layout'
import { UserContextProvider } from '@/store/contexts/UserContect'

// Lazy loading the Login component
const Login = React.lazy(() => import('./login'))

const App = ({ Component, pageProps }: AppProps) => {
  const access_token = Cookies.get('access_token') || ''

  const checkToken = (token: string) => {
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

  const isTokenValid = checkToken(access_token)

  return (
    <Provider store={store}>
      <UserContextProvider>
        <SettingsContextProvider>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* {isTokenValid ? ( */}
          <Login />
          {/* ) : (
              <DesktopLayout>
                <div className="h-full overflow-y-scroll scrollbar-hide ">
                  <Component {...pageProps} />
                </div>
              </DesktopLayout>
            )} */}
          {/* </Suspense> */}
        </SettingsContextProvider>
      </UserContextProvider>
    </Provider>
  )
}

export default App
