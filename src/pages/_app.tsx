import React from 'react'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import DesktopLayout from '@/components/layout'
import store, { SettingsContextProvider } from '@/store'
import Login from './login'
import { UserContextProvider } from '@/store/contexts/UserContect'
import Cookies from 'js-cookie'

export default function App({ Component, pageProps }: AppProps) {
  const access_token = Cookies.get('access_token') || ''

  return (
    <Provider store={store}>
      <UserContextProvider>
        <SettingsContextProvider>
          {access_token.length === 0 ? (
            <Login />
          ) : (
            <DesktopLayout>
              <InnerApp>
                <div className="h-full overflow-y-scroll scrollbar-hide ">
                  <Component {...pageProps} />
                </div>
              </InnerApp>
            </DesktopLayout>
          )}
        </SettingsContextProvider>
      </UserContextProvider>
    </Provider>
  )
}

const InnerApp: React.FC<any> = ({ children }) => {
  return <>{children}</>
}
