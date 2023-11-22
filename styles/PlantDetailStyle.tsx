import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  plantBox: {
    height: '100vh',
    color: 'white',
    backgroundColor: '#78b47d',
  },
  plantInfo: {
    backgroundColor: '#78b47d',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  desc: {
    margin: '20px 20px',
    width: '90%',
    maxWidth: '600px',
  },
  logBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    backgroundColor: '#78b47d',
    padding: { md: '20px 20px 20px 0px' },
  },
  back: {
    margin: 3,
    top: { xs: '200px' },
    left: { xs: 0, sm: 20, xl: 300 },
    backgroundColor: 'beige',
  },
};
