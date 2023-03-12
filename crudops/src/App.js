import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginReg from "./Component/Page/auth/LoginReg";
import ResetPassword from "./Component/Page/auth/ResetPassword";
import SendPasswordResetEmail from "./Component/Page/auth/SendPasswordResetEmail";
import Contact from "./Component/Page/Contact";
import Home from "./Component/Page/Home";
import Layout from "./Component/Page/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Home />}></Route>
          <Route
            path='contact'
            element={<Contact />}></Route>
          <Route
            path='login'
            element={<LoginReg />}></Route>
          <Route
            path='sendpasswordresetemail'
            element={<SendPasswordResetEmail />}></Route>
          <Route
            path='reset'
            element={<ResetPassword />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
