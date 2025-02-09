import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import TextImageRow from '../components/TextImageRow';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact', { state: { service: 'digital-marketing' } });
  };

  const socialMedia = {
    title: "Social Media Management",
    description: (
      <>
        <p className="text-fluid-lg text-gray-600 mb-6 tracking-tight leading-relaxed">
          Keine Zeit für Instagram, TikTok, Facebook, etc? Wir haben die perfekten Pakete für deine Bedürfnisse.
        </p>
        <p className="text-gray-600">
          Auch im Abo erhältlich ab CHF 129.-
        </p>
      </>
    ),
    price: "ab CHF 129.-",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'social-media' } })
  };

  const contentMarketing = {
    title: "Content Marketing",
    description: (
      <>
        <p className="text-fluid-lg text-gray-600 tracking-tight leading-relaxed">
          Ganz egal ob Bewegtbild, Grafik, Text, Redaktionsplanung oder einfach nur Strategie, alles frisst Zeit. Zeit die du nicht hast. Wir schon.
        </p>
      </>
    ),
    price: "",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'content-marketing' } })
  };

  const copywritingSEO = {
    title: "Copywriting / SEO",
    description: (
      <>
        <p className="text-fluid-lg text-gray-600 tracking-tight leading-relaxed">
          Worte sind nicht so deine Sprache? Say no more! Wir bringen dir SEO-Content! Das Artige! Weil Texte und Strategie stehen, dass dein Google Rank auf die Spitze kommt und bleibt.
        </p>
      </>
    ),
    price: "",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'copywriting-seo' } })
  };

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
      <GradientCanvas />
      
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            {/* Hero Section */}
            <div className="max-w-4xl mb-20">
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                Digital<br />
                Marketing
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                VOM KONZEPT ZUR KONVERSION
              </p>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <TextImageRow {...socialMedia} className="mb-8" />
              <TextImageRow {...contentMarketing} className="mb-8" />
              <TextImageRow {...copywritingSEO} className="mb-8" />
            </div>

            {/* Special Wish Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Etwas nicht dabei?<br />
                Frag mal nach.
              </h2>
              <button 
                onClick={handleContact}
                className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
              >
                Special Needs <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default DigitalMarketing;