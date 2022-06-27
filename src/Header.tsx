import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar style = {{background:'#1FA7D0'}}>
        <Toolbar>
          <IconButton>
          </IconButton>
          <div>
            MOBILE ORDER
          </div>
        </Toolbar>
      </AppBar>
    </Box>
   
  );
}
