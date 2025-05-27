import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Catalog from './pages/Catalog';
import './styles/fonts.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-midnight">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/catalogo" element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;