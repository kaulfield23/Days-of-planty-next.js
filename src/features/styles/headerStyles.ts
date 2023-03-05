import { SxProps, Theme } from '@mui/material';

export const navbarStyle: Record<string, SxProps<Theme> | undefined> = {
  appBarStyle: {
    backgroundColor: '#7bda87',
    color: 'black',
    fontFamily: 'Mynerve',
  },
  logoStyle: {
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
  },
  menuStyle: {
    fontFamily: 'rajdhani',
    fontSize: '1.3rem',
  },
};
