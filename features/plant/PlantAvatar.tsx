'use client';

import { Box, Avatar, Typography, Paper } from '@mui/material';

interface PlantAvatarProps {
  pic: string;
  review: string;
  name: string;
  bgColor: string;
}

const PlantAvatar = ({ pic, review, name, bgColor }: PlantAvatarProps) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '30px',
        width: '400px',
        maxWidth: '600px',
        margin: '10px',
      }}
    >
      <Box display="flex" alignItems="center">
        <Avatar
          alt="ee"
          src={`/static/img/${pic}.png`}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: bgColor,
            mr: 2,
          }}
        />
        <Box>
          <Typography variant="h6">{`"${review}"`}</Typography>
          <Typography variant="subtitle1">- {name}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default PlantAvatar;
