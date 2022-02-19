import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
const Navbar = ({isLoggedIn}) => {
  if (isLoggedIn) {
  return(
    <nav>
      <Link to="/">Home</Link>
      <button onClick={LogOut}> LogOut </button>
    </nav>
  )
  }
  else {
    return (
      <nav>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/LogIn">LogIn</Link>
      </nav>
    );
  }
};
export default Navbar;