import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { DiaryStyle } from 'styles/DiaryStyle';

const Diary = () => {
  return (
    <Box sx={DiaryStyle.diaryBox}>
      <Typography>
        blah blah bah blah blah bah blah blah bah blah blah bahblah blah bah
        blah blah bah blah blah bah blah blah bah blah blah bah blah blah bah
        blah blah bahblah blah bah blah blah bah blah blah bah{' '}
      </Typography>
    </Box>
  );
};

export default Diary;
