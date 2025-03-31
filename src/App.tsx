import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./paginas/Home";
import Livros from "./paginas/Livros";
import Autores from "./paginas/Autores";
import Footer from "./componentes/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/autores" element={<Autores />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
