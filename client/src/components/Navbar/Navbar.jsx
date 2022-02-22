import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import Logout from "../LogOut/LogOut";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import Image from "../../docs/BUSINESS-TRAVEL.jpeg";
import { Grid } from "@material-ui/core";

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
  toolbarlink: {
    textDecoration: "none",
  },
  title: {
    display: "none",
    flexGrow: 1,
    textAlign: "center",
    textColor: "white",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  paperContainer: {
    backgroundImage: `https://files.slack.com/files-pri/T2G8TE2E5-F034EK2K673/business-travel.jpeg`,
    height: "100vh",
    width: "100vw",
    border: "none",
  },
  mainTitle: {
    color: "white",
  },
}));

const Navbar = ({ isLoggedIn }) => {
  const pages = ["HOME", "Itinerary"];

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
  const history = useHistory();

  if (isLoggedIn) {
    return (
      <nav>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h3"
                className={classes.title}
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                🌐Wanderlusters
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                ></Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
    );
  } else {
    return (
      <>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.paperContainer}
        >
          <Typography variant="h1" align="center" className={classes.mainTitle}>
            Welcome to
          </Typography>
          <Typography variant="h1" align="center" className={classes.mainTitle}>
            🌐Wanderlusters..
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("/SignUp");
            }}
            type="submit"
          >
            {" "}
            Sign Up Here{" "}
          </Button>
        </Grid>
      </>
    );
  }
};
export default Navbar;
