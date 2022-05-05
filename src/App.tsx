import { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery  from '@mui/material/useMediaQuery';
import { PaletteMode } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import getThemeOptions from './theme';

import { AppBase, Settings } from './Pages/';

import SettingsContextProvider  from './ContextProviders/SettingsContext';

function Home() {
  return (
    <h3>Home</h3>
  )
}

function Replay() {
  return (
    <h3>Replay</h3>
  )
}

export const routesObj = [
  {
    path: '/',
    element: <AppBase />,
    name: 'base',
    children: [
      {
        index: true,
        element: <Home />,
        name: 'home'
      },
      {
        path: 'replays',
        element: <Replay />,
        name: 'replays'
      },
      {
        path: 'settings',
        name: 'settings',
        element: <Settings />
      }
    ]
  }
];

export default function App() {
  const themeMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(themeMode ? 'dark' : 'light');
  
  const theme = useMemo(
    () => createTheme( getThemeOptions(mode) ), [themeMode]
  )
  
  const routes = useRoutes(routesObj)

  return (
    <ThemeProvider theme={theme}>
      <SettingsContextProvider>
        <CssBaseline />
        { routes }
      </SettingsContextProvider>
    </ThemeProvider>
  );
}
