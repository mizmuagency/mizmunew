import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import TextImageRow from '../components/TextImageRow';
import Footer from '../components/Footer';

const BrandingIdentity = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact', { state: { service: 'branding' } });
  };

  const brandStrategy = {
    title: "Brand strategy",
    description: (
      <>
        <p className="text-fluid-lg text-gray-600 tracking-tight leading-relaxed">
          Finde den goldenen Funken, der deine Marke unverwechselbar macht – und lass ihn mit cleverer Positionierung und starken Botschaften hell leuchten.
        </p>
      </>
    ),
    price: "",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'brand-strategy' } })
  };

  const tonality = {
    title: "Gib den Ton an",
    description: (
      <>
        <p className="text-fluid-lg text-gray-600 tracking-tight leading-relaxed">
          Egal, wie packend deine Story ist - wenn du sie falsch erzählst, bleibt sie unsichtbar. Also lass uns eine Stimme finden, die wirklich zu dir passt und sich mit Nachdruck durch den Lärm boxt – damit deine Marke nicht nur gehört, sondern auch erinnert wird.
        </p>
      </>
    ),
    price: "",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'tonality' } })
  };

  const visualIdentity = {
    title: "Visual identity",
    description: (
      <>
        <p className="text-fluid-lg text-gray-600 tracking-tight leading-relaxed">
          Jede Designentscheidung sollte mehr als nur schön sein – sie sollte strategisch durchdacht sein. Lass uns ein visuelles Identitätssystem erschaffen, das nicht nur Sinn ergibt, sondern auch knallt.
        </p>
      </>
    ),
    price: "",
    buttonText: "Angebot holen",
    onButtonClick: () => navigate('/contact', { state: { service: 'visual-identity' } })
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
                Branding &<br />
                Identity
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Markenidentitäten schaffen, von denen die Welt mehr sehen möchte.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <TextImageRow {...brandStrategy} className="mb-8" />
              <TextImageRow {...tonality} className="mb-8" />
              <TextImageRow {...visualIdentity} className="mb-8" />
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

export default BrandingIdentity;