import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Detail from "./pages/Detail";
import Favoris from "./pages/Favoris";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Favoris" element={<Favoris />} />
      <Route path="/Detail" element={<Detail />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
