import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MOBILE ORDER
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}