import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>IGARA - Joias Exclusivas de Luxo</title>
        <meta name="description" content="Descubra a exclusividade e o brilho das joias IGARA. Luxo, presença e tecnologia em cada detalhe." />
        <link rel="icon" href="/favicon.ico" /> {/* Adicionar favicon depois */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cinzel+Decorative:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main className="bg-gray-900 font-serif pt-16"> {/* pt-16 para compensar altura da navbar fixa */}
        <div id="hero">
          <HeroSection />
        </div>
        <div id="collection">
          <ProductShowcase />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;

