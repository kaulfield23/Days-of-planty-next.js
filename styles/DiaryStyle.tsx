import { SxProps, Theme } from '@mui/material';

export const DiaryStyle: Record<string, SxProps<Theme> | undefined> = {
  diaryBox: {
    maxWidth: '800px',
  },
  addComment: {
    display: 'flex',
    justifyContent: 'end',
    mt: 5,
  },
};
