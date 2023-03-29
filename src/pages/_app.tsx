import React from 'react'
import Login from './login'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
// import DesktopLayout from '@/components/layout'
import store, { SettingsContextProvider, useSettings } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SettingsContextProvider>
        <Login />
        {/* <DesktopLayout title="Home">
          <InnerApp {...{ Component, pageProps }} />
        </DesktopLayout> */}
      </SettingsContextProvider>
    </Provider>
  )
}

function InnerApp({ Component, pageProps }: AppProps) {
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

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
