const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 border-t border-gray-700 text-gray-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <p className="text-2xl font-bold text-yellow-400 tracking-tighter" style={{ fontFamily: '"Cinzel Decorative", serif' }}>IGARA</p>
          <p className="text-sm">Joias Exclusivas de Luxo</p>
        </div>
        <div className="mb-4 text-sm">
          <p>Rua das Esmeraldas, 123 - Bairro Nobre, Cidade Brilhante</p>
          <p>contato@igara.com | (XX) XXXX-XXXX</p>
        </div>
        <div className="text-xs">
          <p>&copy; {currentYear} IGARA. Todos os direitos reservados.</p>
          <p>Desenvolvido com paixão e precisão.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

