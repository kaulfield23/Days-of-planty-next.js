'use client';

import React, { useState } from 'react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';

import { useRouter } from 'next/navigation';
import { Grass, LocalFlorist } from '@mui/icons-material';

const Navbar = () => {
  const router = useRouter();

  const actions = [
    {
      icon: <Grass onClick={() => router.push('/plants')} />,
      name: 'Plants',
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <SpeedDial
        direction="down"
        ariaLabel="Navbar"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
        onClose={handleClose}
        onOpen={handleOpen}
        icon={
          <LocalFlorist
            sx={{ color: 'white' }}
            onClick={() => router.push('/')}
          />
        }
        open={open}
        FabProps={{
          sx: {
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
        // onClick={() => router.push('/')}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default Navbar;
