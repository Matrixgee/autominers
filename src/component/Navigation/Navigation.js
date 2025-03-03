import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MainLogo from '../../pages/img/logo.png';
import logo from '../../pages/img/colorLogo.png';
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Plans'];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src={logo} alt="Autominner Logo" style={{width:'100px'}}  />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ textAlign: 'center', dispaly: 'flex', justifyContent: 'center'}}>
              <Button key={item} sx={{ textAlign: 'center' }} onClick={e=> handleLocation(e)} value={item} >
                {item}
              </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const history = useNavigate();
  const container = window !== undefined ? () => window().document.body : undefined;
  const handleLocation = (loc) => {
    let TargetLoc;
    loc = loc.target;
    if(loc.value =='Home') TargetLoc = '/';
    if(loc.value =='About') TargetLoc = '/about-us';
    if(loc.value=='Plans') TargetLoc = '/plan';
    if(loc.value=='Support') TargetLoc = '/Support';
    if(loc.value=='login') TargetLoc = '/login';
    if(loc.value =='sign-up') TargetLoc = '/sign-up';
    history(TargetLoc)
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" style={{background:'#022431'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' },justifyContent:'center'}}
          >
            <img src={MainLogo} alt="Autominner Logo" style={{paddingRight: "30px"}}/>
          </Typography>


          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }}}
          >
            <img src={MainLogo} alt="Autominner Logo" />
          </Typography>
        
          <Box sx={{flexGrow: 2, display: { xs: 'none', sm: 'flex' } ,justifyContent:'space-evenly'}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={e=> handleLocation(e)} value={item} >
                {item}
              </Button>
            ))}
          </Box>
          <div >
          <Stack spacing={2} direction="row" sx={{display: { xs: 'none', sm: 'flex' }}}>
      <Button variant="contained" onClick={e=> handleLocation(e)} value='login'>Login</Button>
      <Button variant="outlined" sx={{color:'white'}} onClick={e=> handleLocation(e)} value='sign-up'>Signup</Button>
    </Stack>
         
          </div>
        </Toolbar>
      </AppBar>

      <nav style={{background:'#022431'}}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navigation.propTypes = {

  window: PropTypes.func,
};

export default Navigation;