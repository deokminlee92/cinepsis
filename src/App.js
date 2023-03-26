import React from "react";
import Home from "../src/pages/Home";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
//bootstrap & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
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
