// App.js
import "./App.css";
import Header from "./Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Aboutme from "./pages/Aboutme";
import Contactme from "./pages/Contactme";
import { DarkModeProvider } from "./DarkModeContext"; // Importez le contexte

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
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
    </DarkModeProvider>
  );
}