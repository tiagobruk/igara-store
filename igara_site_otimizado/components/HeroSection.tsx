import Image from 'next/image'; // Para usar o componente Image do Next.js futuramente

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image/Video Placeholder - Idealmente uma imagem de alta qualidade ou vídeo sutil */}
      <div className="absolute inset-0 z-0">
        {/* Exemplo de placeholder de imagem de fundo */}
        {/* <Image src="/images/hero-background.jpg" alt="Background IGARA" layout="fill" objectFit="cover" quality={100} /> */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay escuro para contraste */}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-4">
        {/* Logo Placeholder */}
        <div className="mb-8">
          {/* <Image src="/images/igara-logo-gold.png" alt="IGARA Logo" width={200} height={100} /> */}
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 tracking-tighter" style={{ fontFamily: '"Cinzel Decorative", serif' }}>IGARA</h1>
        </div>

        {/* Anel em Destaque Placeholder - Aqui entraria a imagem principal do anel */}
        <div className="my-12 w-64 h-64 md:w-96 md:h-96 bg-gray-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-500">
          <p className="text-gray-400">[Imagem do Anel Solar em Destaque Aqui]</p>
        </div>

        {/* Manifesto */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-500 mb-4 tracking-tight">Luxo. Presença. Tecnologia.</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Na IGARA, cada joia é uma declaração. Criamos peças que transcendem o tempo, combinando design artesanal de vanguarda com a mais pura essência da exclusividade. Sinta o poder de um brilho que é só seu.
          </p>
        </div>

        {/* Call to Action (Opcional) */}
        <div className="mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore a Coleção
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

