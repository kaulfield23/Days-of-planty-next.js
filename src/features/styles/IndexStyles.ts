import { SxProps, Theme } from '@mui/material';
import leaves from '../../img/leaves.png';

export const indexStyle: Record<string, SxProps<Theme> | undefined> = {
  backgroundStyle: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${leaves.src})`,
    backgroundSize: { xs: '60%', md: '800px' },
    backgroundPosition: '3% 97%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  text: {
    fontFamily: 'Rajdhani',
    fontWeight: 400,
    color: 'white',
  },
  titleBackground: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#50c78594',
    top: '50%',
    transform: 'translateY(-50%)',
    width: { xs: '100vw', md: '60vw' },
    height: '20em',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  desc: {
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
  },
  yellowBox: {
    backgroundColor: '#fdff6ba2',
    height: '20em',
    position: 'absolute',
    width: { xs: '100vw', md: '70vw' },
    top: '25%',
  },
  verticalLeft: {
    width: { xs: '0', md: '2em' },
    height: ' 100vh',
    position: 'absolute',
    left: '0',
    display: 'flex',
    backgroundColor: '#32d0d37c',
  },
  verticalRight: {
    width: { xs: '0', md: '2em' },
    height: ' 100vh',
    position: 'absolute',
    right: '0',
    display: 'flex',
    backgroundColor: '#32d0d37c',
  },
};
