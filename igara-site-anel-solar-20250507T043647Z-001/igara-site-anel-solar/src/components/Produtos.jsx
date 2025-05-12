import React from 'react';
export default function Produtos() {
  return (
    <section id="produtos" className="produtos">
      <h2>Coleção IGARA</h2>
      <div className="vitrine">
        <div className="produto-card">
          <h3>Anel IGARA Solar</h3>
          <p>Forjado para selar destinos. Um símbolo de presença, poder e luz.</p>
          <p><strong>R$ 397,00</strong></p>
          <button onClick={() => window.open('https://example-nft-link.com', '_blank')}>Ver NFT</button>
          <button onClick={() => alert('Checkout via Pix em breve!')}>Comprar Agora</button>
        </div>
      </div>
    </section>
  );
}