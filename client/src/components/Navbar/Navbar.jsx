import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import Logout from '../LogOut/LogOut';
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles} from "@material-ui/core";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = ({isLoggedIn}) => {
  const pages = ['HOME', 'Itenary'];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  const classes = useStyles();
  if (isLoggedIn) {
  return(
    <nav>
     
<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
             <Button variant="contained" color="primary">
          <Link to={"/"}>Home</Link>
         </Button>
             <Button 
                variant="contained" 
                color="primary">
          <Link to={"/Itenary"}>Intinerary</Link>
         </Button>
             <Button 
                variant="contained" 
                color="primary"
                onClick={Logout}
                type="submit"
                > LogOut </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    </nav>


  )
  }
  else {

    return (
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
          🌐Wanderlusters
          </Typography>
            <div className={classes.navlinks}>
              <Link to="/About" className={classes.link}>
              About
              </Link>
              <Link to="/SignUp" className={classes.link}>
              SignUp
              </Link>
              <Link to="/LogIn" className={classes.link}>
              LogIn
              </Link>
            </div>
        </Toolbar>
      </AppBar>
    );
  }
};
export default Navbar;

