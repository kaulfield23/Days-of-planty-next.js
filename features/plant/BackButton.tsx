import { ArrowBack } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';

const BackButton = () => {
  const router = useRouter();
  return (
    <Box>
      <Fab
        sx={PlantDetailStyle.back}
        size="small"
        onClick={() => router.back()}
      >
        <ArrowBack />
      </Fab>
    </Box>
  );
};

export default BackButton;
