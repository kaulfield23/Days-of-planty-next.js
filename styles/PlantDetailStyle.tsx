import { SxProps, Theme } from '@mui/material';

export const PlantDetailStyle: Record<string, SxProps<Theme> | undefined> = {
  plantBox: {
    height: '100vh',
    display: { xs: '', sm: '', md: 'flex', lg: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-start' },
    marginLeft: { xs: '0', sm: '0', md: '0', lg: '85px' },
    marginBottom: '-80px',
  },
  infoBox: {
    backgroundColor: '#78b47d',
    margin: '20px auto',
    borderRadius: { md: '6px' },
    color: 'white',
    textAlign: 'center',
    padding: 3,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    maxHeight: { xs: 'none', sm: '500px', md: '600px' },
  },
  desc: {
    width: '90%',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'start',
  },
  content: {
    maxWidth: '1400px',
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
    top: { sm: 0, md: '130px' },
    backgroundColor: 'beige',
  },
};
