import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import TextImageRow from '../components/TextImageRow';
import Footer from '../components/Footer';

const VirtualAssistance = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact', { state: { service: 'virtual-assistance' } });
  };

  const websiteManagement = {
    title: "Website Management",
    description: (
      <>
        <p className="text-fluid-lg mb-4">Aktualisierung und Pflege der Inhalte auf der Website</p>
        <ul className="space-y-2 text-gray-600">
          <li>• Optimierung der Benutzerfreundlichkeit</li>
          <li>• Erstellung von Landingpages</li>
          <li>• Blogartikel & SEO-Texte</li>
          <li>• Online Shop Produkte aktualisieren</li>
          <li>• Bildbearbeitung und was da sonst noch alles braucht</li>
        </ul>
      </>
    ),
    price: "CHF 125.- / H",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'website-management' } })
  };

  const backoffice = {
    title: "Backoffice",
    description: (
      <>
        <ul className="space-y-2 text-gray-600">
          <li>• Korrespondenz</li>
          <li>• Newsletter, Berichte, Protokolle</li>
          <li>• Kundenanschreiben und -mailings</li>
          <li>• Texte für Webseiten erstellen und redigieren</li>
          <li>• Briefe (privat oder geschäftlicher Natur)</li>
          <li>• Eventplanung</li>
          <li>• Organisation (messen, TeamEvents, Schulungen)</li>
          <li>• Webshop Produkte erfassen</li>
          <li>• Social Media nochmals :D</li>
        </ul>
      </>
    ),
    price: "CHF 125.- / H",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'backoffice' } })
  };

  const socialMediaManagement = {
    title: "Social Media Management",
    description: (
      <>
        <ul className="space-y-2 text-gray-600">
          <li>• Content erstellen, bearbeiten und posten</li>
          <li>• Sicherstellen von Traffic</li>
          <li>• Trendanalyse</li>
          <li>• Wettbewerber schalten</li>
          <li>• Interaktion mit Kunden pflegen und fördern</li>
          <li>• SEO gerechte Texte erstellen</li>
        </ul>
      </>
    ),
    price: "CHF 125.- / H",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'social-media-management' } })
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
                Virtual<br />
                Assistance
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Strategie, Inhalte, Templates
              </p>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <TextImageRow {...websiteManagement} className="mb-8" />
              <TextImageRow {...backoffice} className="mb-8" />
              <TextImageRow {...socialMediaManagement} className="mb-8" />
            </div>

            {/* Special Wish Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Spezielle Anfrage?<br />
                Wir brennen darauf!
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

export default VirtualAssistance;