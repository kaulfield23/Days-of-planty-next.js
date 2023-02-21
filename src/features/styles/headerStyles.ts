import { SxProps, Theme } from '@mui/material';

export const navbarStyle: Record<string, SxProps<Theme> | undefined> = {
  appBarStyle: { backgroundColor: '#99b3a9' },

  logoStyle: { flexGrow: 1, display: { xs: 'none', sm: 'block' } },
};
