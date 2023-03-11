import { Card, Grid, Tabs, Box, Tab } from "@mui/material";
import React from "react";
import Pic1 from "../../../images/picture_1.png";

function LoginReg() {
  return (
    <div>
      <Grid
        container
        sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></Grid>
        <Grid
          item
          lg={5}
          sm={7}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
              <Tabs
                textColor='secondary'
                indicatorColor='secondary'>
                <Tab label='Login'></Tab>
                <Tab label='Registion'></Tab>
              </Tabs>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginReg;
