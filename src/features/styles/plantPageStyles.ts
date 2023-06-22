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
};
