import React , {useState, useEffect} from 'react';

const LogOut = () => {
  
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    window.location = "/";
}
export default LogOut;