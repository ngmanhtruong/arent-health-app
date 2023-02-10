import { useEffect, useState } from 'react'
import { setToLS, getFromLS } from '../../utils/storage'
import _ from 'lodash'
import { ARENT_THEME_LOCAL_STORAGE } from '../../constants/storage'

export const useTheme = (themes) => {
  const themesLocal = getFromLS(ARENT_THEME_LOCAL_STORAGE)
  const [theme, setTheme] = useState(themesLocal ? themesLocal : themes.light)
  const [themeLoaded, setThemeLoaded] = useState(false)
  const finalTheme = themesLocal ? themesLocal : themes.light

  const setMode = (mode) => {
    setToLS('theme', mode)
    setTheme(mode)
  }

  const getFonts = () => {
    const allFonts = finalTheme.font.slice()

    return allFonts
  }

  useEffect(() => {
    themesLocal ? setTheme(themesLocal) : setTheme(finalTheme)
    setThemeLoaded(true)
  }, [])

  return { theme, themeLoaded, setMode, getFonts }
}
