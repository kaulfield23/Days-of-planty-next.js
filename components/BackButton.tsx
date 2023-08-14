import { ArrowBack } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import React from 'react';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';

interface BackButtonProps {
  onBack: () => void;
}
const BackButton = ({ onBack }: BackButtonProps) => {
  return (
    <Box sx={PlantDetailStyle.backParent}>
      <Fab sx={PlantDetailStyle.back} size="small" onClick={onBack}>
        <ArrowBack />
      </Fab>
    </Box>
  );
};

export default BackButton;
