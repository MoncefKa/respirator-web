import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Patient from "./Pages/Patient";
import Login from "./Pages/Login.jsx";
import Layout from "./Components/Layout.js";

function App() {
  const Homee = ({children}) =>   <Routes>
  <Route path="/" element={<Home/>} />
</Routes>;
  return (
    <Router>
    <Layout>
      <Homee>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Patient" element={<Patient/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
            </Homee>
      </Layout>
  
    </Router>
  );
}

export default App;
