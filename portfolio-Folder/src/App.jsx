import './App.css';
import { Button } from "@/components/ui/button";
import Header from './header';
import './index.css';
import Home from "./pages/Home"; 
import Skills from "./pages/Skills"; 
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen bg-white"> 
 <Router>
      <Header /> {/* Le Header sera affiché sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/Skills" element={<Skills />} /> {/* Route pour la page Work */}
        <Route path="/Aboutme" element={<Aboutme />} /> {/* Route pour la page About */}
        <Route path="/Contactme" element={<Contactme />} /> {/* Route pour la page Contact */}
      </Routes>
    </Router>
     
    </div>
  );
}