export interface SettingsState {
  isDarkMode: boolean
  language: string
  isMobile: boolean
}

export const initialState: SettingsState = {
  isDarkMode: false,
  language: 'en',
  isMobile: false,
}

export const settingsReducer = (
  state = initialState,
  action: { type: string; payload: any }
): SettingsState => {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return { ...state, isDarkMode: action.payload }
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload }
    case 'SET_IS_MOBILE':
      return { ...state, isMobile: action.payload }
    default:
      return state
  }
}
