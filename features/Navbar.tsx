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

  return (
    <Box sx={{ position: 'fixed', right: 0, zIndex: 1 }}>
      <SpeedDial
        direction="down"
        ariaLabel="Navbar"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(true)}
        icon={<LocalFlorist sx={{ color: 'white' }} />}
        open={open}
        FabProps={{
          sx: {
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => setOpen(false)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default Navbar;
