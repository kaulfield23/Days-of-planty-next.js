import { SxProps, Theme } from '@mui/material';

export const loginStyle: Record<string, SxProps<Theme> | undefined> = {
  loginBox: {
    display: 'flex',
    width: '800px',
    backgroundColor: '#f8e4e7',
    borderRadius: '70px',
    margin: '0 auto',
    img: {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
  },
  loginField: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    justifyContent: 'center',
  },
  btns: {
    pt: 2,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};
