import { SxProps, Theme } from '@mui/material';

export const DiaryStyle: Record<string, SxProps<Theme> | undefined> = {
  diarySection: {
    textAlign: 'start',
    borderRadius: '3px',
    backgroundColor: '#f5f5f5',
    width: { xs: '95vw', md: '80vw' },
    maxWidth: '700px',
    height: '93vh',
    maxHeight: '1550px',
  },
  logBox: {
    overflow: 'auto',
    scrollbarColor: '#6d6161 white',
    padding: '30px 10px',
    height: '90%',
  },
  titleDate: {
    display: { xs: 'wrap', sm: 'flex' },
    justifyContent: 'space-between',
    overflow: 'auto',
    mb: 1,
  },
  zeroLog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    width: '300px',
    backgroundColor: '#6d61612a',
    textAlign: 'center',
    ml: { xs: 0, md: 2 },
    p: 2,
  },
};
