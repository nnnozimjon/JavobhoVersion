import { setDarkMode, setIsMobile, setLanguage } from './actions/actions'
import { useSettings } from './contexts/SettingsContext'
import store from './store/store'
import { SettingsContextProvider } from './contexts/SettingsContext'

export {
  setDarkMode,
  setIsMobile,
  setLanguage,
  useSettings,
  SettingsContextProvider,
}

export default store
