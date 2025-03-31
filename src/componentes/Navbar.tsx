// src/componentes/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação interna
import "../estilos/Navbar.css"; // Estilos gerais da navbar
import "../estilos/Medias.css"; // Estilos de media queries

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
            <Link to="/livros">Livros</Link> {/* Usando o Link para navegação */}
          </div>
          <div className="link-da-barra">
            <Link to="/autores">Autores</Link> {/* Link para outra página, se necessário */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
