import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import TextImageRow from '../components/TextImageRow';
import Footer from '../components/Footer';

const WebsiteDesign = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact', { state: { package: 'custom' } });
  };

  const packageS = {
    title: "Package S",
    description: (
      <>
        <p className="text-fluid-lg mb-4">Onepager, aka "eifachi Website"</p>
        <p className="text-fluid-lg mb-4">Hier erhältst du:</p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Design nach Wahl</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>1 Seite mit allen deinen Grundbedürfnissen</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Kontaktformular</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Google Indexierung</span>
          </li>
        </ul>
        <p className="mt-6 text-fluid-sm text-gray-500">
          Hostinggebühren CHF 150.- jährlich
        </p>
      </>
    ),
    price: "CHF 599.-",
    subtext: "zzgl. Hostinggebühren CHF 150.- jährlich",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { package: 'S' } })
  };

  const packageM = {
    title: "Package M",
    description: (
      <>
        <p className="text-fluid-lg mb-4">Das etwas umfassendere Paket. Ideal für Unternehmen, die viel zu bieten haben.</p>
        <p className="text-fluid-lg mb-4">Im Package dabei sind:</p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>bis zu 10 Seiten</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Design nach Wahl</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Google Indexierung + Analytics Integration</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Kontaktoptionen nach Wunsch</span>
          </li>
        </ul>
        <p className="mt-6 text-fluid-sm text-gray-500">
          Hostinggebühren CHF 150.- jährlich
        </p>
      </>
    ),
    price: "ab CHF 1099.-",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { package: 'M' } })
  };

  const packageL = {
    title: "Package L",
    description: (
      <>
        <p className="text-fluid-lg mb-4">Das Premium-Paket für maximale Flexibilität und Funktionalität.</p>
        <p className="text-fluid-lg mb-4">Im Package dabei sind:</p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Unbegrenzte Seiten</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Custom Design nach Ihren Wünschen</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>E-Commerce Integration möglich</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>SEO Optimierung</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Analytics & Marketing Integration</span>
          </li>
        </ul>
        <p className="mt-6 text-fluid-sm text-gray-500">
          Hostinggebühren CHF 150.- jährlich
        </p>
      </>
    ),
    price: "ab CHF 1599.-",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { package: 'L' } })
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
                Website<br />
                für deine<br />
                Bedürfnisse
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Digitale Erfahrung zu kreieren wo sich Schönheit mitt Funktionalität trifft. Das ist unsere Stärke.
              </p>
            </div>

            {/* Packages */}
            <div className="space-y-8">
              <TextImageRow {...packageS} className="mb-8" />
              <TextImageRow {...packageM} className="mb-8" />
              <TextImageRow {...packageL} className="mb-8" />
            </div>

            {/* Special Wish Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Special Wish:<br />
                Let us know
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

export default WebsiteDesign;