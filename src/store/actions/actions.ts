export const setDarkMode = (isDarkMode: boolean) => ({
  type: 'SET_DARK_MODE',
  payload: isDarkMode,
})

export const setLanguage = (language: string) => ({
  type: 'SET_LANGUAGE',
  payload: language,
})

export const setIsMobile = (isMobile: boolean) => ({
  type: 'SET_IS_MOBILE',
  payload: isMobile,
})
