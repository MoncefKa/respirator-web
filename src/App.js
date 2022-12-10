import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Patient from "./Pages/Patient";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";


function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Patient" element={<Patient/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
      
    </Router>
  );
}

export default App;
