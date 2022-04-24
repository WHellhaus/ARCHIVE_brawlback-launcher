import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// default theme with correct primary color for accessing theme props in styleoverrides
const defaultTheme = createTheme({
  palette: {
    primary: {main: '#4CEBB4'},
  }
});

const getThemeOptions = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? 
    // Theme for Light mode
    {
      primary: {main: '#4CEBB4'},
      text: {
        primary: '#000000',
        secondary: '#444444'
      },
      divider: '#000000',
      background: {
        default: '#FFFFFF',
        paper: '#CCCCCC'
      }
    } : 
    // Theme for Dark mode
    {
      primary: {main: '#4CEBB4'},
      text: {
        primary: '#FFFFFF',
        secondary: '#DDDDDD'
      },
      divider: '#FFFFFF',
      background: {
        default: '#414242',
        paper: '#595A5A'
      },
    }),
  },
  // CSS Class Overrides for both themes
  components: {
    MuiListItem: {
      styleOverrides: {
        "root": {
          "&.Mui-selected": {
            "background": defaultTheme.palette.primary.main
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: defaultTheme.typography.fontWeightMedium
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        "root": {
          "&:hover": {
            "background": defaultTheme.palette.primary.dark
          }
        }
      }
    }
  }
});

export default getThemeOptions;
