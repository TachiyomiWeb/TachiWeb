import { create, getThemeColors, toAmoled } from './services/theme';
import { RootState } from './store';
import { darkScrollbar, GlobalStyles, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import { setTranslation } from './store/states/translation';
import { i18n } from './services/i18n';

const themes = {
  light: create('light'),
  dark: create('dark')
};

export default function App() {
  const settings = useSelector((state: RootState) => state.settings);
  const colors = getThemeColors(settings.theme, settings.dark);
  const dispatch = useDispatch();

  React.useEffect(() => {
    i18n().then((values) => dispatch(setTranslation({ values, language: 'ru' })))
  }, [])

  return (
    <ThemeProvider theme={ {
      ...themes[settings.dark ? 'dark' : 'light'],
      ...(settings.amoled ? toAmoled(colors) : colors)
    } }>
      <GlobalStyles
        styles={ {
          body: darkScrollbar(),
        } }
      />
      <Router>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}