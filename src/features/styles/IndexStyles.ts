import { SxProps, Theme } from '@mui/material';
import plant from '../../img/plant.png';

export const indexStyle: Record<string, SxProps<Theme> | undefined> = {
  backgroundStyle: {
    backgroundColor: 'beige',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${plant.src})`,
    backgroundSize: { xs: '60%', md: '800px' },
    backgroundPosition: '3% 97%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  title: {
    fontFamily: 'Rajdhani',
    fontWeight: 300,
    color: '#202c20',
  },
  titleBackground: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#fdff6ba2',
    top: '50%',
    transform: 'translateY(-50%)',
    width: { xs: '50%', md: '800px' },
    height: '300px',
  },
  desc: {
    padding: '2em',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
  },
};
