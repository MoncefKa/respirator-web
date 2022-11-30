import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Patient from './Pages/Patient.jsx';
import Profile from './Pages/Profile.jsx';
import Login from './Pages/Login.jsx';
import Layout from './Components/Layout.js'

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
