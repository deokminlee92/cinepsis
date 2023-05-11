import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Home } from "../src/pages/index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

// *************************NEW VERSION************************* //

// import React from "react";
// import { Routes } from "react-router-dom";
// import { Route } from "react-router-dom";

// //Import Pages
// import Home from "../src/pages/Home";

// //bootstrap & CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
