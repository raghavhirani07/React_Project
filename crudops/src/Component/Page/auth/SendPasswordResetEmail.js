import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

function SendPasswordResetEmail() {
  const [error, seterror] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
    if (actualData.email) {
      console.log(actualData);
      seterror({
        status: true,
        msg: " Password Reset Email sent. Check Your Email",
        type: "success",
      });
      document.getElementById("password-reset-email-form").reset();
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
        <center>
          <h2> Reset Password </h2>
        </center>
        <Box
          component='form'
          noValidation
          sx={{ mt: 1 }}
          id='password-reset-email-form'
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
          <Box textAlign='center'>
            <Button
              type='submit'
              variant='contained'
              sx={{ mt: 3, mb: 2, px: 5 }}>
              send
            </Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ""}
        </Box>
      </Grid>
    </Grid>
  );
}

export default SendPasswordResetEmail;
