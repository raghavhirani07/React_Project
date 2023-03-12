import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [error, seterror] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirm_password: data.get("confirm-password"),
    };
    if (actualData.password && actualData.confirm_password) {
      if (actualData.password === actualData.confirm_password) {
        console.log(actualData);
        seterror({
          status: true,
          msg: " Password Reset Email sent. Check Your Email",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        seterror({
          status: true,
          msg: " Check your password and confirm password ",
          type: "warning",
        });
      }
    } else {
      //   console.log("All Fileds Are Required");
      seterror({ status: true, msg: " All Filed requre", type: "error" });
    }
  };
  return (
    <Grid
      container
      justifyContent='center'>
      <Grid
        item
        sm={6}
        xs={12}>
        <Box
          component='form'
          noValidation
          sx={{ mt: 1 }}
          id='password-reset-form'
          onSubmit={handleSubmit}>
          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            id='password'
            name='password'
            label='Enter Password'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            id='confirm-password'
            name='confirm-password'
            label='Retype Password'
          />
          <Box textAlign='center'>
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, mb: 2, px: 5 }}>
              Save
            </Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ""}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;
