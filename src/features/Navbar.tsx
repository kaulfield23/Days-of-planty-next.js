import React from 'react';
import {
  AppBar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { navbarStyle } from './styles/headerStyles';

const Navbar = () => {
  const navMenu = ['Home', 'Login'];
  return (
    <AppBar position="sticky" sx={navbarStyle.appBarStyle} component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={navbarStyle.logoStyle}>
          Logo
        </Typography>

        {navMenu.map((nav) => {
          return (
            <ListItem key={nav} disablePadding>
              <ListItemButton sx={{ textAlign: 'end' }}>
                <ListItemText primary={nav} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
