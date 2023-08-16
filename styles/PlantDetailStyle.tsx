import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  plantBox: {
    height: '100vh',
    display: { xs: '', sm: '', md: 'flex', lg: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    // margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-start' },
    position: 'relative',
    left: { xs: '', sm: 30 },
    marginBottom: '-80px',
  },
  info: {
    width: { sm: '100%' },
    backgroundColor: '#78b47d',
    margin: '20px auto',
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
    padding: 3,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
  },
  desc: {
    width: '60%',
    maxWidth: '500px',
    margin: '20px auto',
    textAlign: 'start',
  },
  context: {
    margin: 'auto',
    paddingTop: '50px',
    width: '80%',
    maxWidth: '1300px',
    position: 'absolute',
  },
  contextMobile: {
    display: 'flex',
    flexDirection: 'column',
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
