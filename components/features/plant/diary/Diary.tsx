import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { DiaryStyle } from 'styles/DiaryStyle';
import { DiaryTypes } from 'utils/types';

interface DiaryProps {
  plantId: string | null;
}

const Diary = ({ plantId }: DiaryProps) => {
  const [logs, setLogs] = useState<DiaryTypes>();

  const fetchDiary = () => {
    fetch(`/api/diary?plantId=${plantId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => console.log(setLogs(data)));
  };
  console.log(logs);

  return (
    <Box sx={DiaryStyle.diaryBox}>
      <Box sx={DiaryStyle.diarySection} onClick={fetchDiary}>
        <Typography variant="h4" color="customBlack.main">
          Log
        </Typography>
      </Box>
    </Box>
  );
};

export default Diary;
