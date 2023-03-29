/* eslint-disable no-unused-vars */
import { createStore, combineReducers } from 'redux'
import { settingsReducer } from '../reducers/settings'

interface SettingsState {
  isDarkMode: boolean
  language: string
  isMobile: boolean
}

const rootReducer = combineReducers({
  settings: settingsReducer,
})

const store = createStore(rootReducer)

export default store
