// src/componentes/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom"; 
import "../estilos/Navbar.css"; 
import "../estilos/Medias.css"; 

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="lado-esquerdo">
        <Link to="/">
          <img src="/Logotipo.png" alt="Logotipo" className="logo" />
        </Link>
      </div>
      <div className="lado-direito">
        <div className="links-da-barra">
          <div className="link-da-barra">
            <Link to="/livros">Livros</Link> 
          </div>
          <div className="link-da-barra">
            <Link to="/autores">Autores</Link> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
