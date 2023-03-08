import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Aleart from "./Component/Aleart";
import Navbar from "./Component/Navbar";

function App() {
  const [mode, setmode] = useState("light");
  const [aleart, setaleart] = useState(null);
  const showAleart = (message, type) => {
    setaleart({
      message: message,
      type: type,
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      showAleart("Change dark mode", "info");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAleart("Change dark mode", "info");
    }
  };

  return (
    <>
      <Navbar title='TextUtils' mode={mode} togglemode={togglemode} />
      <Aleart aleart={aleart}></Aleart>
      <Outlet />
    </>
  );
}

export default App;
