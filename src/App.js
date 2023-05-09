import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

//Import Pages
import Home from "../src/pages/Home";
import Login from "./pages/Login";

//bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;

// export default function App() {
//   <div className="App">
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="*" element={<Home />} />
//     </Routes>
//   </div>;
// }
