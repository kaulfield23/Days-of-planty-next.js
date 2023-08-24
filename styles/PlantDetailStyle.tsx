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
    justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
    marginLeft: { xs: '0', sm: '0', md: '80px', lg: '130px' },
    marginBottom: '-105px',
  },
  infoBox: {
    backgroundColor: '#78b47d',
    margin: '30px auto',
    borderRadius: { md: '6px' },
    color: 'white',
    textAlign: 'center',
    padding: 3,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    maxHeight: { xs: 'none', sm: 'none', md: '600px' },
  },
  desc: {
    width: '90%',
    maxWidth: '600px',
    margin: '30px auto',
    textAlign: 'start',
  },
  content: {
    width: { sm: '100%', md: 'fit-content' },
    maxWidth: '1400px',
    position: 'absolute',
  },
  backParent: {
    position: 'absolute',
  },
  back: {
    position: 'relative',
    margin: 3,
    top: { sm: '130px', md: '130px' },
    backgroundColor: 'beige',
  },
};
