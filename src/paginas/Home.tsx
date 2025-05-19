import React from "react";
import "../estilos/Home.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="livros">
          <img src="/Got.jpg" alt="Got" className="livro" />
          <img src="/harrypotter.jpg" alt="Harry Potter" className="livro" />
          <img src="/HOTD.jpg" alt="HOTD" className="livro" />
          <img src="/jogosvorazes.jpg" alt="Jogos Vorazes" className="livro" />
        </div>
      </div>

      <div className="cartoes-librarium">
        <div className="conteudo-librarium">
          <h1>Librarium</h1>
          <p>
            Bem-vindo ao Librarium, sua plataforma para organizar livros de
            maneira eficiente. Com uma interface intuitiva, você pode cadastrar,
            visualizar e gerenciar suas obras e escritores com apenas alguns
            cliques.
          </p>
        </div>

        <div className="grupo-cartoes">
          <div className="cartao">
            <h2>Catálogo de Livros</h2>
            <p>
              Adicione, organize e visualize seus livros favoritos em um só
              lugar.
            </p>
          </div>

          <div className="cartao">
            <h2>Gerenciamento de Autores</h2>
            <p>
              Mantenha informações detalhadas sobre seus autores preferidos.
            </p>
          </div>

          <div className="cartao">
            <h2>Interface Intuitiva</h2>
            <p>
              Experimente uma navegação simples e eficiente para facilitar seu
              uso.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
