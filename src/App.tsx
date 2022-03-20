import React from 'react';
import './css/App.css';
import MainPage from './components/pages/Main.page';
import { ThemeProvider } from '@emotion/react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material/';
import { createTheme } from '@mui/material';

function App() {
  const themeState = useSelector((state: RootStateOrAny) => state.themeState);
  const theme = React.useMemo(
    () => (createTheme({
      palette: {
        mode: (themeState.value === 'light') ? 'light' : 'dark',
      },
    })),
    [themeState.value]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  )
}

export default App;
