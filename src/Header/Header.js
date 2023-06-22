import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

    return(

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <AssignmentIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Sun Airlines
            </Typography>
            <Box sx={{flexGrow: 1}}>
              <Link to={'/'} style={{padding: '0 5px'}}>Book</Link>
              <Link to={'/my_orders'} style={{padding: '0 5px'}}>My orders</Link>
            </Box>
            <Stack direction={'column'}>
              {/* <Typography variant='p'>Hello, Guest!</Typography> */}
              <Button onClick={() => navigate('/login')} color="inherit">Login</Button>
            </Stack>
          </Toolbar>
        </AppBar>
        </Box>

    )
}

export default Header;