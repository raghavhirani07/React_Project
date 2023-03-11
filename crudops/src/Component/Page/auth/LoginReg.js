import { Card, Grid, Tabs, Box, Tab } from "@mui/material";
import React, { useState } from "react";
import Pic1 from "../../../images/picture_1.png";
import Registion from "./Registion";
import UserLogin from "./UserLogin";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function LoginReg() {
  const [value, setvalue] = useState(0);
  const handleChange = (e, newvalue) => {
    setvalue(newvalue);
  };
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
            display: { xs: "none", sm: "block" },
          }}></Grid>
        <Grid
          item
          lg={5}
          sm={7}
          xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ borderBottom: 3, borderColor: "divider" }}>
              <Tabs
                value={value}
                textColor='secondary'
                indicatorColor='secondary'
                onChange={handleChange}>
                <Tab label='Login'></Tab>
                <Tab label='Registion'></Tab>
              </Tabs>
            </Box>
            <TabPanel
              value={value}
              index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel
              value={value}
              index={1}>
              <Registion />
            </TabPanel>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginReg;
