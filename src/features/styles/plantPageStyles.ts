import { SxProps, Theme } from '@mui/material';
import plant from '../../img/haejuplant-rv.png';

export const plantPageStyle: Record<string, SxProps<Theme> | undefined> = {
  title: {
    fontFamily: 'Rajdhani',
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
    flexGrow: 1,
    bgcolor: '#f5f5f5',
    display: 'flex',
    height: 800,
    width: '80%',
    minWidth: '300px',
    maxWidth: '1500px',
    margin: '0 auto',
    mt: 3,
  },
  plantTab: {
    fontSize: { xs: 14, sm: 60 },
  },
};
