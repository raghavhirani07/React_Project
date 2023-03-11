import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
            path='/contact'
            element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
