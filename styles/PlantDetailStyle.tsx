import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  plantBox: {
    height: '100vh',
    display: { xl: 'flex' },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78b47d',
    color: 'white',
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
    mt: 2,
    mb: 2,
    width: '100%',
    maxWidth: '600px',
  },
  logBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    backgroundColor: '#78b47d',
  },
};
