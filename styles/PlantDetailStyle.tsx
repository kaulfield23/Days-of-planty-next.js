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
    margin: '20px 20px',
    width: '90%',
    maxWidth: '600px',
  },
  logBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    backgroundColor: '#78b47d',
  },
  backParent: {
    position: 'absolute',
  },
  back: {
    position: 'relative',
    margin: 3,
    top: { xs: '200px', sm: '200px', md: '200px' },
    left: { xs: 0, sm: 20, xl: -600 },
    backgroundColor: 'beige',
  },
};
