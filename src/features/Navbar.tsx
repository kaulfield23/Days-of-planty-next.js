import React from 'react';
import { AppBar, MenuItem, Toolbar, Typography } from '@mui/material';
import { navbarStyle } from './styles/headerStyles';
import Link from 'next/link';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const Navbar = () => {
  const navMenu = ['Home', 'Login'];
  return (
    <>
      <AppBar
        position="sticky"
        sx={navbarStyle.appBarStyle}
        component="nav"
        elevation={0}
      >
        <Toolbar>
          <Link href="/">
            <LocalFloristIcon sx={{ mr: 1, fontSize: '2.5rem' }} />
          </Link>
          <Typography
            variant="subtitle1"
            component="div"
            sx={navbarStyle.logoStyle}
          >
            Days of Planty
          </Typography>

          {navMenu.map((nav) => {
            return (
              <MenuItem key={nav}>
                <Link href={`/${nav.toLowerCase()}`}>
                  <Typography textAlign="center" sx={navbarStyle.menuStyle}>
                    {nav}
                  </Typography>
                </Link>
              </MenuItem>
            );
          })}
        </Toolbar>
      </AppBar>
      <h1>hello</h1>
    </>
  );
};

export default Navbar;
