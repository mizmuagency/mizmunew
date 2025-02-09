import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-[#f5f5f5]">
      <GradientCanvas />
      
      <div className="relative z-20">
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

        <main className="container mx-auto py-safe-top">
          {/* Hero Section */}
          <div className="min-h-[90vh] flex flex-col justify-center items-center relative">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-bold tracking-tight leading-tight">
                digitale Magie.
              </h1>
              <div className="mt-6 flex flex-col items-center">
                <ArrowDown className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-8 xs:space-y-10 sm:space-y-12">
            {/* Web Design Service */}
            <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
              {/* ... (previous web design content) ... */}
            </div>

            {/* Digital Marketing Service */}
            <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
              {/* ... (previous digital marketing content) ... */}
            </div>

            {/* Branding Service */}
            <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
              {/* ... (previous branding content) ... */}
            </div>

            {/* Virtual Assistance Service */}
            <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                {/* Purple Box - First on mobile */}
                <div className="w-full md:w-[400px] md:order-last">
                  <div className="bg-[#9333EA] rounded-none rounded-tr-[100px] p-8 xs:p-10 sm:p-12 flex flex-col justify-end h-full">
                    <div className="text-white">
                      <div className="text-fluid-5xl tracking-tight mb-3">ab CHF 399.-</div>
                      <div className="text-fluid-sm opacity-80">
                        monatlich
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                    Virtual<br />
                    Assistance
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">E-Mail Management</span>
                    <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Kalender</span>
                    <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Administration</span>
                    <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Projektmanagement</span>
                  </div>

                  <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                    Professionelle Unterstützung für Ihr Business - flexibel, zuverlässig und effizient.
                  </p>

                  <Link 
                    to="/virtual-assistance"
                    className="touch-target bg-transparent border-2 border-black rounded-full px-6 py-3 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors tracking-tight"
                  >
                    Find out more <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="section-spacing">
            <div className="text-fluid-3xl xs:text-fluid-4xl font-bold tracking-tight leading-tight content-spacing">
              Etwas nicht dabei?<br />
              Frag mal nach.
            </div>
            <Link 
              to="/contact"
              className="touch-target bg-transparent border-2 border-black rounded-full px-6 py-3 inline-flex items-center gap-2 hover:bg-black hover:text-white transition-colors tracking-tight"
            >
              Special Needs <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;