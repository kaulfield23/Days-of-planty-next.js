import { SxProps, Theme } from '@mui/material';

export const plantPageStyle: Record<string, SxProps<Theme> | undefined> = {
  title: {
    textAlign: 'center',
  },
  titleBox: { zIndex: 1000 },
  bgPic: {
    position: 'absolute',
    right: 0,
  },
  titleDesc: {
    backgroundColor: { xs: '#f4e545c0', md: 'transparent' },
    padding: { xs: '10px', md: '0' },
    borderRadius: '7px',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    backgroundColor: '#78b47d',
  },
  plantTabsBox: {
    width: '90%',
    minWidth: '300px',
    margin: '0 auto',
    mt: 3,
  },
  plantTab: {
    fontSize: { xs: 14, sm: 60 },
  },
};
