import Image from 'next/image'; // Para usar o componente Image do Next.js futuramente

// Dados mocados para os produtos. Idealmente, viriam de um CMS ou API.
const products = [
  {
    id: 1,
    name: 'Anel Solar IGARA',
    description: 'Uma obra de arte em ouro 18k, cravejada com um citrino vibrante, simbolizando o sol.',
    imagePlaceholder: '/images/anel-solar-placeholder.jpg', // Substituir pelo caminho real da imagem
    price: 'R$ 7.500,00',
  },
  {
    id: 2,
    name: 'Pulseira Lótus IGARA',
    description: 'Delicadeza e força se unem nesta pulseira de prata 950 com detalhes em madrepérola.',
    imagePlaceholder: '/images/pulseira-lotus-placeholder.jpg', // Substituir pelo caminho real da imagem
    price: 'R$ 3.200,00',
  },
  {
    id: 3,
    name: 'Colar Constelação IGARA',
    description: 'Safiras e diamantes dançam em uma constelação particular neste colar de ouro branco.',
    imagePlaceholder: '/images/colar-constelacao-placeholder.jpg', // Substituir pelo caminho real da imagem
    price: 'R$ 12.800,00',
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 tracking-tight" style={{ fontFamily: '"Cinzel Decorative", serif' }}>
            Coleção IGARA
          </h2>
          <p className="text-lg text-gray-400 mt-2">Descubra peças que contam histórias e revelam sua essência.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
              <div className="w-full h-72 bg-gray-600 flex items-center justify-center">
                {/* Placeholder para a imagem do produto */}
                {/* <Image src={product.imagePlaceholder} alt={product.name} width={400} height={400} objectFit="cover" /> */}
                <p className="text-gray-400">[Imagem de {product.name}]</p>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-500 mb-2" style={{ fontFamily: '"Cinzel", serif' }}>{product.name}</h3>
                <p className="text-gray-300 leading-relaxed mb-4 h-24 overflow-y-auto">{product.description}</p>
                <p className="text-xl font-bold text-yellow-400 mb-4">{product.price}</p>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-md text-md shadow-md transition duration-300 ease-in-out">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

