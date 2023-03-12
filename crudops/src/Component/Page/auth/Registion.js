import { Alert, Box, Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registion() {
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
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirm_password: data.get("confirm-password"),
      tc: data.get("tc"),
    };
    if (
      actualData.name &&
      actualData.password &&
      actualData.name &&
      actualData.confirm_password &&
      actualData.tc !== null
    ) {
      if (actualData.password === actualData.confirm_password) {
        seterror({ status: true, msg: " Registion successfull  ", type: "success" });
        document.getElementById("registion-form").reset();
        navigate("/");
      } else {
        seterror({ status: true, msg: "check password and confirm password", type: "warning" });
      }
      // console.log(actualData);
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
        id='registion-form'
        onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          type='text'
          fullWidth
          id='name'
          name='name'
          label='Name'
        />
        <TextField
          margin='normal'
          required
          type='email'
          fullWidth
          id='email'
          name='email'
          label='Enter the Email'
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
        <TextField
          margin='normal'
          required
          fullWidth
          type='password'
          id='confirm-password'
          name='confirm-password'
          label='Retype Password'
        />
        <FormControlLabel
          control={
            <Checkbox
              value='agree'
              color='primary'
              name='tc'
              id='tc'
            />
          }
          label='I agree to term and Condition'
        />
        <Box textAlign='center'>
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 3, mb: 2, px: 5 }}>
            Join
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ""}
      </Box>
    </div>
  );
}

export default Registion;
