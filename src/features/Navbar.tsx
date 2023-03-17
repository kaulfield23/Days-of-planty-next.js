import React, { useState } from 'react';
import { SpeedDial, SpeedDialAction } from '@mui/material';

import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const actions = [
    {
      icon: <LoginIcon onClick={() => router.push('/login')} />,
      name: 'Login',
    },
  ];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
        icon={<LocalFloristIcon />}
        open={open}
        FabProps={{
          sx: {
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        }}
        onClick={() => router.push('/')}
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
    </>
  );
};

export default Navbar;
