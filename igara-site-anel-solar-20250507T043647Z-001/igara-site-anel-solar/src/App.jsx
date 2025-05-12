import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Manifesto from './components/Manifesto';
import Produtos from './components/Produtos';
import Contato from './components/Contato';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Manifesto />
      <Produtos />
      <Contato />
    </div>
  );
}