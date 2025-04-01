# Librarium

**Librarium** é uma plataforma de gerenciamento de livros e autores, criada como parte de um desafio front-end. O objetivo principal do projeto é desenvolver um CRUD (Create, Read, Update, Delete) para livros e autores de forma simples e funcional. A plataforma tem como foco a organização eficiente de obras literárias, com uma interface limpa e intuitiva.

## Funcionalidades

### Funcionalidades de Livros:
- **Criar um livro**: Utiliza um modal para cadastrar um novo livro.
- **Visualizar todos os livros**: Exibe uma lista de todos os livros cadastrados.
- **Visualizar um livro específico**: Exibe os detalhes de um livro selecionado em um modal.
- **Excluir um livro**: Permite excluir um livro com uma confirmação por alerta.

### Funcionalidades de Autores:
- **Criar um autor**: Utiliza um modal para cadastrar um novo autor.
- **Visualizar todos os autores**: Exibe uma lista de todos os autores cadastrados.
- **Visualizar um autor específico**: Exibe os detalhes de um autor selecionado em um modal.
- **Excluir um autor**: Permite excluir um autor com uma confirmação por alerta.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **Radix UI**: Biblioteca utilizada para a criação de componentes de interface de forma acessível e com fácil personalização.
- **CSS**: Estilização do projeto utilizando CSS puro.
- **Local Storage**: Armazenamento de dados no navegador para persistir os livros e autores cadastrados.

## Requisitos

- **Criar um livro**: O livro possui as propriedades `ID` (obrigatório), `Nome` (obrigatório), `Nome do Autor` (obrigatório), `Páginas` (opcional) e `Ano de publicação` (opcional).
- **Criar um autor**: O autor possui as propriedades `ID` (obrigatório), `Nome` (obrigatório), `E-mail` (opcional) e `Nacionalidade` (opcional).

## Como Executar

1. **Instalação**:
   - Clone o repositório:
     ```bash
     git clone https://github.com/YlsonSantos/Projeto-Contato-Seguro.git
     ```
   - Acesse a pasta do projeto:
     ```bash
     cd projeto-contato-seguro
     ```
   - Instale as dependências necessárias:
     ```bash
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```

## Licença

Esse README foi estruturado de acordo com o desafio proposto e o código fornecido, com detalhes sobre as funcionalidades, requisitos e como executar o projeto.
