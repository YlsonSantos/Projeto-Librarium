import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';
import './estilos/Global.css'; 

const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Elemento com id 'app' não encontrado.");
}
