import React from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar color="primary" enableColorOnDark={true} position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
