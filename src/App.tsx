import React from 'react';
import './css/App.css';
import MainPage from './components/pages/Main.page';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material/';
import { createTheme } from '@mui/material';
import { StoreState } from './store/store';
import { themeStyles } from './styles/ThemeStyle';

function App() {
  const themeState = useSelector((state: StoreState) => state.themeState);
  const theme = React.useMemo(
    () => (createTheme(themeStyles(themeState.value))),
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
