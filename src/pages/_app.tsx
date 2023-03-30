import React from 'react'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import DesktopLayout from '@/components/layout'
import store, { SettingsContextProvider, useSettings } from '@/store'
import Login from './login'

export default function App({ Component, pageProps }: AppProps) {
  const loged = false
  return (
    <Provider store={store}>
      <SettingsContextProvider>
        {loged ? (
          <Login />
        ) : (
          <DesktopLayout title="Home">
            <InnerApp>
              <Component {...pageProps} />
            </InnerApp>
          </DesktopLayout>
        )}
      </SettingsContextProvider>
    </Provider>
  )
}

const InnerApp: React.FC<any> = ({ children }) => {
  const { setIsMobile } = useSettings()

  React.useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      setIsMobile(isMobile)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{children}</>
}
