import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from "./components/Auth/Auth";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;

