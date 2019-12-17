import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions'


const Navigation = ({user}) => {
  const navStyle = {
    color: 'white',
  }

  const handleLogout = (e) => {
    e.preventDefault();
    console.log(user.loggedIn)
    logout();
    console.log(document.cookie)
    console.log(logout());
  }

  if (user.loggedIn) {
    return (
      <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" style={navStyle}>Listings</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/add" style={navStyle}>Add</Link>
            </li>
            <li className="nav-list-item"
              onClick={handleLogout}>
              <Link to="/" style={navStyle}>LOGOUT</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    )
  } else if (!user.loggedIn)
    {
    return (
      <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" style={navStyle}>Listings</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/login" style={navStyle}>Login</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Navigation;