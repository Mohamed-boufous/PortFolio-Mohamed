import './App.css';

import Header from './header';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Skills from "./pages/Skills"; 
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme"; 

export default function App() {
  return (
    <div className="min-h-screen bg-white "> 
 <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Skills" element={<Skills />} /> 
        <Route path="/Aboutme" element={<Aboutme />} /> 
        <Route path="/Contactme" element={<Contactme />} /> 
      </Routes>
    </Router>
     
    </div>
  );
}