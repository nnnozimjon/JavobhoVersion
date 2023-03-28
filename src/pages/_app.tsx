import React from 'react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store, { SettingsContextProvider, useSettings } from '@/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SettingsContextProvider>
        <InnerApp {...{ Component, pageProps }} />
      </SettingsContextProvider>
    </Provider>
  )
}

function InnerApp({ Component, pageProps }: AppProps) {
  const { settings, setIsMobile } = useSettings()

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
