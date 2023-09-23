import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ token, setToken }) => {
    
  function logout() {
    setToken(null);
    localStorage.removeItem('token');
  }
  
  return (
    <nav>
      <ul>
        <li><Link to="/posts">Posts</Link></li>
        {token && <li><Link to="/profile">Profile</Link></li> }
        {!token && <li><Link to="/login">Login</Link></li>}
        {!token && <li><Link to="/register">Register</Link></li>}
        {token && <li><button onClick={logout}>Logout</button></li>}
      </ul>
    </nav>
  )
}

export default NavBar;