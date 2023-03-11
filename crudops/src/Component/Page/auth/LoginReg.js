import { Grid } from "@mui/material";
import React from "react";
import Pic1 from "../../../images/";
function LoginReg() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{ backgroundImage: `url($(Pic1))` }}></Grid>
      </Grid>
    </div>
  );
}

export default LoginReg;
