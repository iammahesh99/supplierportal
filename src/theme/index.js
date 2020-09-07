import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const colorGrey = '#66686A';
const colorRed = '#FB263B';
const colorWhite = '#FFFFFF';
const colorBlack = '#000000';
const fontFamily = 'Arial, Helvetica, sans-serif';

const theme = createMuiTheme({
  palette: {
    common: {
      primary: colorWhite,
      default_background: colorWhite,
    },
    primary: {
      main: colorRed,
      contrastText: colorWhite,
    },
  },
  typography: {
    fontFamily,
    color: '#000000',
    button: {
      letterSpacing: '0.06em',
    },
  },
});

export default theme;
