import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar title='TextUtils' />

      <Outlet />


    </>
  );
}

export default App;
