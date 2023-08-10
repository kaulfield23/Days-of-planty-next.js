import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },
  imgBox: {
    borderRadius: '10%',
  },
  plantBox: {
    height: '100vh',
    marginBottom: 3,
    // backgroundColor: 'beige',
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
    padding: 5,
  },
  desc: {
    width: '60%',
    maxWidth: '900px',
    margin: '20px auto',
  },
};
