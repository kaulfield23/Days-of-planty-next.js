import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },

  plantBox: {
    height: '100vh',
  },
  info: {
    height: '50%',
    width: '97%',
    maxWidth: '1700px',
    backgroundColor: '#78b47d',
    margin: { xs: '-50px auto', sm: '-20px auto' },
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  desc: {
    width: '80%',
    maxWidth: '900px',
    margin: '20px auto',
  },
  context: {
    position: 'absolute',
    left: '50%',
    top: '48%',
    WebkitTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    paddingBottom: '30px',
  },
};
