import { SxProps, Theme } from '@mui/material';

export const DiaryStyle: Record<string, SxProps<Theme> | undefined> = {
  diaryBox: {
    maxWidth: '800px',
    backgroundColor: '#78b47d',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
  },
  diarySection: {
    // minWidth: '300px',
    backgroundColor: '#f5f8e8',
    color: 'black',
    height: '450px',
  },
};
