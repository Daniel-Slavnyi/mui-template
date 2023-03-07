import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: orange[500],
      second: 'white',
    },
    customCol: { main: 'red' },
  },
  typography: {
    fontSize: 16,
    customVariant: {
      fontSize: 20,
    },
  },
});

{
  /* <Paper></Paper> - component of background for children*/
  /* <CssBaseLine /> - it is normalize*/
  /* <Typography variant='?' paragraph={true} component='h1'>body1</Typography> 
  h1;
  h2;
  h3;
  h4;
  h5;
  h6;
  subtitle1;
  subtitle2;
  body1;
  body2;
  button;
  caption;
  overline;*/
}
