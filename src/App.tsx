import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as themes from './theme/schema.json'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/theme/useTheme';
import { setToLS } from './utils/storage';
import { ARENT_THEME_LOCAL_STORAGE } from './constants/storage';
import WebFont from 'webfontloader'
import { GlobalStyles } from './theme/globalStyles';
import AppRouter from './routes';
function App() {
  const { theme, themeLoaded, getFonts} = useTheme(themes)
  const [selectedTheme, setSelectedTheme] = useState(theme)

  setToLS(ARENT_THEME_LOCAL_STORAGE, theme)

  // update selected theme
  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded])

  // load fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    })
  })

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
