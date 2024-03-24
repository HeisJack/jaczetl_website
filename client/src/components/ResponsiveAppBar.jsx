import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import SocialMediaPallet from './SocialMediaPallet';



const pages = ['About', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const logo_img = process.env.PUBLIC_URL + '/images/logo.png';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function navigateToPage(name){
    console.log("This is the event name: ", name);
    if(name === 'Home'){
      props.setCurrentPage('Home');
      const path = '/';
      // Navigate to the dynamically generated path
      navigate(path);

    }else if (name === 'About'){
      props.setCurrentPage('About');
      // Generate the path based on the currentPage variable
      const path = '/about';
      // Navigate to the dynamically generated path
      navigate(path);
    }else if (name === 'Blog'){
      props.setCurrentPage('Blog');
      const path = '/blog';
      navigate(path);
    }else if(name === 'Contact'){
      props.setCurrentPage('Contact');
      const path = '/contact';
      navigate(path);
    }
  }

  return (
    <AppBar position="static" className="ResponsiveAppBarMargin" sx={{ ...theme.appBar }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{p: 0, m: 0}}>
              <SocialMediaPallet />
            </Grid>
            <Grid item xs={4} md={3} lg={3} xl={3}>
              <IconButton
                onClick={() => navigateToPage("Home")} // Define handleClick function to handle button click
                sx={{ 
                      height: {xs: 50, sm: 60, md: 80, lg: 100, xl: 120},
                      width: 'auto'
                }} // Set width and height as per your image dimensions
              >
                <img src={logo_img} style={{ width: '100%', height: '100%' }}/>
              </IconButton>
            </Grid>

            {/* Responsive Menu Icon */}
            <Grid item xs={8} md={1} lg={1} xl={1}>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Button
                        key={page}
                        name={page}
                        onClick={() => navigateToPage(page)}
                      >
                        {page}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'}}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    name={page}
                    onClick={() => navigateToPage(page)}
                    sx={{ ...theme.appBarLinks }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;