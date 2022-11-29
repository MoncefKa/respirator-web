import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import MainDash from "./Pages/MainDash.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route index element={<MainDash/>}/>
        </Routes>
    </Router>
  );
}

export default App;
