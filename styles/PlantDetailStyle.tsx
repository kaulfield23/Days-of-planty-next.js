import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-80px',
  },

  plantBox: {
    height: '100vh',
    display: { xs: '', sm: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    height: '50%',
    width: '97%',
    maxWidth: '1700px',
    backgroundColor: '#78b47d',
    margin: '20px auto',
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
    padding: 3,
  },
  desc: {
    width: '80%',
    maxWidth: '900px',
    margin: '20px auto',
  },
  context: {
    margin: 'auto',
    paddingTop: '50px',
  },
  backParent: {
    position: 'absolute',
  },
  back: {
    position: 'relative',
    margin: 3,
    backgroundColor: 'beige',
  },
};
