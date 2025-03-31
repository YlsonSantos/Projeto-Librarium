// src/main.tsx
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
import './estilos/Global.css'; // Estilos globais

const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Elemento com id 'app' não encontrado.");
}
