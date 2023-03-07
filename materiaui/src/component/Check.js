import { CheckBox } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import "./all.css";

function Check() {
  return (
    <div className='main'>
      <div>
        <h3> Check Button </h3>
        <CheckBox />
      </div>
      <div>
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='female'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <h3> Rating </h3>

        <Typography component='legend'>Custom icon and color</Typography>
      </div>
    </div>
  );
}

export default Check;
