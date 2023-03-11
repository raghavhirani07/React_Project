import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          color='secondary'>
          <Toolbar>
            <Typography
              variant='h5'
              component='div'
              sx={{ flexGrow: 1 }}>
              Geek - Shop
            </Typography>
            <Button
              component={NavLink}
              to='/'
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}>
              Home
            </Button>
            <Button
              component={NavLink}
              to='/contact'
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}>
              Contact
            </Button>
            <Button
              component={NavLink}
              to='/login'
              sx={{ color: "white" }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : " " };
              }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
