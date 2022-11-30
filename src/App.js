import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Patient from "./Pages/Patient";
import Login from "./Pages/Login.jsx";
import Layout from "./Components/Layout.js";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Patient" element={<Patient/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
