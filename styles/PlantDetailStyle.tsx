import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },
  imgBox: {
    // paddingTop: 10,
    borderRadius: '10%',
  },
  background: {
    height: '100vh',
    backgroundColor: 'beige',
  },
  info: {
    height: '50%',
    width: '97%',
    maxWidth: '1700px',
    backgroundColor: '#78b47d',
    margin: '-20px auto',
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
  },
};
