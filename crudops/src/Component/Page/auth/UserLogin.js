import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function UserLogin() {
  const [error, seterror] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password) {
      console.log(actualData);
      seterror({ status: true, msg: " Login success ", type: "success" });
      document.getElementById("login-form").reset();
      navigate("/");
    } else {
      //   console.log("All Fileds Are Required");
      seterror({ status: true, msg: " All Filed requre", type: "error" });
    }
  };
  return (
    <div>
      <Box
        component='form'
        noValidation
        sx={{ mt: 1 }}
        id='login-form'
        onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          type='email'
          fullWidth
          id='email'
          name='email'
          label='Email Address'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          type='password'
          id='password'
          name='password'
          label='Enter Password'
        />
        <Box textAlign='center'>
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Login
          </Button>
        </Box>
        <NavLink to='/'> Forgot Password</NavLink>
        {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ""}
      </Box>
    </div>
  );
}

export default UserLogin;
