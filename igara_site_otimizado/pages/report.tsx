import Head from 'next/head';

const ReportPage = () => {
  return (
    <>
      <Head>
        <title>Relatório Comparativo - IGARA</title>
        <meta name="description" content="Análise comparativa de fornecedores para a IGARA Joias." />
      </Head>
      <main className="container mx-auto px-4 py-16 bg-gray-900 text-gray-200 min-h-screen font-serif">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-400 tracking-tight">Relatório Comparativo de Fornecedores</h1>
          <p className="text-xl text-gray-400 mt-2">Printify vs. CJ Dropshipping para Joalheria IGARA</p>
        </header>

        <div className="max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl">
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 border-b-2 border-yellow-500 pb-2">Introdução</h2>
            <p className="text-lg leading-relaxed">
              Este relatório visa comparar as plataformas Printify e CJ Dropshipping em relação à sua adequação para a marca de joias IGARA, focando em opções de personalização, qualidade percebida dos produtos, e alinhamento com a identidade de luxo e exclusividade da marca.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 border-b-2 border-yellow-500 pb-2">Critérios de Avaliação</h2>
            <ol className="list-decimal list-inside text-lg leading-relaxed space-y-2 pl-4">
              <li>Variedade de Produtos de Joalheria: Disponibilidade de anéis, colares, pulseiras, brincos e outros itens relevantes.</li>
              <li>Opções de Personalização: Gravação, escolha de materiais, pedras, embalagens personalizadas.</li>
              <li>Qualidade Percebida: Com base nas descrições, imagens e reputação dos fornecedores.</li>
              <li>Custos e Precificação: Transparência nos custos de produção, taxas de assinatura, opções de frete.</li>
              <li>Facilidade de Integração e Uso: Interface da plataforma, suporte ao cliente, processos de pedido.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-6 border-b-2 border-yellow-500 pb-2">Análise Detalhada das Plataformas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 rounded-md shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Printify</h3>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">Pontos Fortes:</h4>
                <ul className="list-disc list-inside text-lg space-y-1 pl-4 mb-4">
                  <li>Ampla rede de fornecedores, alguns especializados em joalheria.</li>
                  <li>Foco em impressão sob demanda, interessante para designs exclusivos.</li>
                  <li>Interface geralmente intuitiva e fácil de usar.</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">Pontos Fracos:</h4>
                <ul className="list-disc list-inside text-lg space-y-1 pl-4">
                  <li>Qualidade e materiais das joias podem variar muito.</li>
                  <li>Opções de personalização profunda podem ser limitadas.</li>
                  <li>Menos foco em embalagens premium como padrão.</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-md shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">CJ Dropshipping</h3>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">Pontos Fortes:</h4>
                <ul className="list-disc list-inside text-lg space-y-1 pl-4 mb-4">
                  <li>Acesso direto a fornecedores chineses (variedade e custos).</li>
                  <li>Forte em personalização de embalagens e branding.</li>
                  <li>Serviços de sourcing para produtos específicos.</li>
                </ul>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">Pontos Fracos:</h4>
                <ul className="list-disc list-inside text-lg space-y-1 pl-4">
                  <li>Qualidade exige pesquisa e seleção cuidadosa.</li>
                  <li>Comunicação e suporte podem ser desafiadores.</li>
                  <li>Prazos de entrega podem ser mais longos.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-6 border-b-2 border-yellow-500 pb-2">Comparativo Direto (Foco IGARA)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 border border-gray-600 rounded-md shadow-lg">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-yellow-400 uppercase tracking-wider">Característica</th>
                    <th className="text-left py-3 px-4 font-semibold text-yellow-400 uppercase tracking-wider">Printify</th>
                    <th className="text-left py-3 px-4 font-semibold text-yellow-400 uppercase tracking-wider">CJ Dropshipping</th>
                    <th className="text-left py-3 px-4 font-semibold text-yellow-400 uppercase tracking-wider">Observações para IGARA</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                    <td className="py-3 px-4 text-lg">Variedade de Joias</td>
                    <td className="py-3 px-4 text-lg">Moderada, depende dos fornecedores</td>
                    <td className="py-3 px-4 text-lg">Ampla, com acesso a muitos fabricantes</td>
                    <td className="py-3 px-4 text-lg">Ambas requerem pesquisa para luxo e exclusividade.</td>
                  </tr>
                  <tr className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                    <td className="py-3 px-4 text-lg">Personalização</td>
                    <td className="py-3 px-4 text-lg">Boa para gravação e impressão</td>
                    <td className="py-3 px-4 text-lg">Forte em embalagens, sourcing para designs</td>
                    <td className="py-3 px-4 text-lg">CJ para embalagens de luxo. Printify para designs únicos.</td>
                  </tr>
                  <tr className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                    <td className="py-3 px-4 text-lg">Qualidade Percebida</td>
                    <td className="py-3 px-4 text-lg">Variável, requer pesquisa</td>
                    <td className="py-3 px-4 text-lg">Variável, requer pesquisa e amostras</td>
                    <td className="py-3 px-4 text-lg">Diligência crucial em ambas.</td>
                  </tr>
                  <tr className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                    <td className="py-3 px-4 text-lg">Custo</td>
                    <td className="py-3 px-4 text-lg">Transparente, pode ser maior por unidade</td>
                    <td className="py-3 px-4 text-lg">Potencialmente menor, considerar importação</td>
                    <td className="py-3 px-4 text-lg">Avaliar custo total (produto + frete + taxas).</td>
                  </tr>
                  <tr className="hover:bg-gray-600 transition-colors duration-200">
                    <td className="py-3 px-4 text-lg">Branding</td>
                    <td className="py-3 px-4 text-lg">Limitado à impressão no produto/embalagem</td>
                    <td className="py-3 px-4 text-lg">Forte em embalagens e etiquetas personalizadas</td>
                    <td className="py-3 px-4 text-lg">CJ oferece mais opções para branding consistente.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 border-b-2 border-yellow-500 pb-2">Conclusão Preliminar</h2>
            <p className="text-lg leading-relaxed mb-4">
              Ambas as plataformas têm potencial para a IGARA, mas com abordagens diferentes. O Printify pode ser mais direto para iniciar com designs próprios em peças específicas, enquanto o CJ Dropshipping oferece mais flexibilidade em sourcing e personalização de embalagens, o que é crucial para uma marca de luxo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 border-b-2 border-yellow-500 pb-2">Recomendação</h2>
            <p className="text-lg leading-relaxed mb-4">
              Para a IGARA, que busca exclusividade e uma experiência de marca premium, uma estratégia híbrida pode ser considerada. No entanto, se for para escolher uma para começar, <strong>CJ Dropshipping</strong> parece mais alinhado devido às opções de personalização de embalagem e sourcing direto, permitindo um controle maior sobre a apresentação do produto final.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-yellow-300">
              É crucial, antes de qualquer decisão, solicitar amostras de produtos e embalagens de ambas as plataformas para avaliar a qualidade real e o alinhamento com a visão da IGARA.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 border-b-2 border-yellow-500 pb-2">Próximo Passo</h2>
            <p className="text-lg leading-relaxed">
              Validar o alinhamento dos produtos com a marca IGARA e definir os próximos passos com base na análise. Se necessário, refinar a busca ou considerar outras plataformas.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default ReportPage;

