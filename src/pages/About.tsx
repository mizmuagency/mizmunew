import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const About = () => {
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
                Digitale Magie<br />
                Macher
              </h1>
              <p className="text-fluid-3xl xs:text-fluid-4xl text-gray-600 max-w-xl tracking-tight leading-snug">
                Wir zaubern in dem wir abliefern. Lern uns kennen:
              </p>
            </div>

            {/* Team Members */}
            <div className="space-y-8">
              {/* Alma */}
              <div className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] aspect-square" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Alma
                    </h2>
                    <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                      Neuste Tech Trend? Alma kennt sie schon, seit 5 Jahren. Hast einen neuen Song gehört? Alma hörte ihn schon vor 10 Jahren. Ohne es dir unter die Nase zu reiben. Im Gegenteil: Sie teilt aus, ehm nein, natürlich mit dir.
                    </p>
                    <a 
                      href="mailto:alma@mizmu.ch" 
                      className="touch-target bg-transparent border border-black rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors tracking-tight text-sm"
                    >
                      Sag Alma hallo <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Melina */}
              <div className="rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px]">
                    <div className="bg-[#9333EA] rounded-3xl xs:rounded-[48px] aspect-square" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Melina
                    </h2>
                    <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                      It's Melina. Übrigens aus 2155. Weiss telepathisch was imgaheim deine Wünsche sind, noch bevor du es weisst. Grosser Plus: Sie machts möglich.
                    </p>
                    <a 
                      href="mailto:melina@mizmu.ch" 
                      className="touch-target bg-transparent border border-black rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors tracking-tight text-sm"
                    >
                      Melina begrüssen <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-20 mb-32">
              <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                Magie gefällig? Oder<br />
                Kaffee? Auf Deinen<br />
                Nacken, Gönnjamin
              </h2>
              <button className="touch-target bg-transparent border border-black rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors tracking-tight text-sm">
                Freunde werden <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default About;