import React from "react";
import { Button, ButtonGroup, Fab, IconButton } from "@mui/material";
import {
  Delete,
  PhotoCamera,
  Fingerprint,
  Add,
  Edit,
  Navigation,
} from "@mui/icons-material";
import './all.css'

function Buttonss() {
  return (
    <div className='main' >
      <div>
        <h3>Basic Button </h3>
        <Button variant='text'>Text</Button>
        <Button variant='contained'> contained</Button>
        <Button variant='outlined'>outlined</Button>
      </div>
      <div>
        <h3>Color</h3>
        <Button variant='contained' color='secondary'>
          hello
        </Button>
        <Button variant='contained' color='success'>
          hello
        </Button>
        <Button variant='contained' color='primary'>
          hello
        </Button>
        <Button variant='contained' color='error'>
          hello
        </Button>
      </div>
      <div>
        <h3>Size</h3>
        <Button variant='contained' size='small'>
          Hello
        </Button>
        <Button variant='contained' size='medium'>
          Hello
        </Button>
        <Button variant='contained' size='large'>
          Hello
        </Button>
      </div>
      <div>
        <h3>Upload Button</h3>
        <Button variant='contianed' component='label' color='primary'>
          Upload
          <input hidden accept='image/*' multiple type='file' />
        </Button>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='label'
        >
          <input hidden accept='image/*' type='file' />
          <PhotoCamera />
        </IconButton>
      </div>
      <div>
        <h3> icon with button </h3>
        <Button variant='contained' startIcon={<Delete />}>
          {" "}
          button{" "}
        </Button>
        <IconButton>
          <Delete />
        </IconButton>
        <IconButton>
          <Fingerprint />
        </IconButton>
      </div>

      <div>
        <h3> Button Group </h3>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          aria-label='outlined primary button group'
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <h3> Fab icon</h3>
        <Fab color='primary' aria-label='add'>
          <Add />
        </Fab>
        <Fab color='secondary' aria-label='add'>
          <Edit />
        </Fab>
        <Fab variant="extended" color="error"><Navigation /> Navigation</Fab>
      </div>
    </div>
  );
}

export default Buttonss;
