import React, { createContext, useContext, useState } from 'react'

interface Settings {
  isDarkMode: boolean
  language: string
  isMobile: boolean
}

interface SettingsContextValue {
  settings: Settings
  setDarkMode: (isDarkMode: boolean) => void
  setLanguage: (language: string) => void
  setIsMobile: (isMobile: boolean) => void
}

const defaultSettings: Settings = {
  isDarkMode: false,
  language: 'en',
  isMobile: false,
}

const SettingsContext = createContext<SettingsContextValue>({
  settings: defaultSettings,
  setDarkMode: () => {},
  setLanguage: () => {},
  setIsMobile: () => {},
})

export function useSettings() {
  return useContext(SettingsContext)
}

interface Props {
  children: React.ReactNode
}

export function SettingsContextProvider({ children }: Props) {
  const [settings, setSettings] = useState<Settings>(defaultSettings)

  const setDarkMode = (isDarkMode: boolean) =>
    setSettings(prevState => ({ ...prevState, isDarkMode }))

  const setLanguage = (language: string) =>
    setSettings(prevState => ({ ...prevState, language }))

  const setIsMobile = (isMobile: boolean) =>
    setSettings(prevState => ({ ...prevState, isMobile }))

  return (
    <SettingsContext.Provider
      value={{ settings, setDarkMode, setLanguage, setIsMobile }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
