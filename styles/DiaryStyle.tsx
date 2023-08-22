import { SxProps, Theme } from '@mui/material';

export const DiaryStyle: Record<string, SxProps<Theme> | undefined> = {
  diarySection: {
    textAlign: 'start',
    borderRadius: '3px',
    backgroundColor: '#f7f6ea',
  },
  logBox: {
    overflow: 'auto',
    scrollbarColor: '#6d6161 white',
    padding: '30px 10px',
    height: { md: '450px' },
    minWidth: { xs: '85vw', md: '400px', lg: '700px' },
  },
  titleDate: {
    display: { xs: 'wrap', sm: 'flex' },
    justifyContent: 'space-between',
    overflow: 'auto',
    mb: 1,
  },
  zeroLog: {
    width: '300px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d61612a',
  },
};
