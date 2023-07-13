'use client';

import { Box, Typography } from '@mui/material';
import { indexStyle } from 'styles/IndexStyle';

const HomePage = () => {
  return (
    <>
      <Box sx={indexStyle.backgroundStyle}>
        <Box sx={indexStyle.yellowBox}></Box>
        <Box sx={indexStyle.verticalLeft}></Box>
        <Box sx={indexStyle.verticalRight}></Box>
        <Box sx={indexStyle.titleBackground}>
          <Box sx={indexStyle.desc}>
            <Typography sx={indexStyle.text} variant="h2">
              Days of Planty
            </Typography>
            <Typography sx={indexStyle.text} variant="h5">
              Keep an eye on my plants to avoid killing them
            </Typography>
            <Typography sx={indexStyle.text} variant="h5">
              Next.js, Typescript, MongoDB, MUI
            </Typography>
            <Typography sx={indexStyle.text} variant="h6">
              By.Haeju
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
