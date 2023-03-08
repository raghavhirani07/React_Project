import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  const [mode,setmode] = useState('warning')
  return (
    <>
      <Navbar title='TextUtils' mode ={mode} enablemode={setmode} />
      <Outlet  />


    </>
  );
}

export default App;
