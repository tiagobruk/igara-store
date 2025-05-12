import Link from 'next/link';

// Idealmente, a logo viria de um arquivo de imagem
const Logo = () => (
  <Link href="/" legacyBehavior>
    <a className="text-3xl font-bold text-yellow-400 tracking-tighter" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
      IGARA
    </a>
  </Link>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="space-x-6">
          <Link href="/#collection" legacyBehavior><a className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg font-medium">Coleção</a></Link>
          <Link href="/#contact" legacyBehavior><a className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg font-medium">Contato</a></Link>
          <Link href="/report" legacyBehavior><a className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-lg font-medium">Relatório</a></Link>
          {/* Adicionar mais links conforme necessário */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

