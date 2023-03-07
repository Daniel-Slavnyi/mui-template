import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { theme } from 'style/theme';

import Header from './Header/Header';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  );
};
