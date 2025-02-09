import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Home() {
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
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-none rounded-tr-[100px] p-8 xs:p-10 sm:p-12 flex flex-col justify-end h-full">
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Web design &<br />
                      development
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Creative web design</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Web development</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Copywriting</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">E-Commerce</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">WordPress</span>
                    </div>

                    <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                      Für digitale Erlebnisse, die Ästhetik mit Funktionalität vereinen, Aufmerksamkeit erregen und den Umsatz maximieren.
                    </p>

                    <Link 
                      to="/website-design"
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Digital Marketing Service */}
              <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-none rounded-tr-[100px] p-8 xs:p-10 sm:p-12 flex flex-col justify-end h-full">
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Digital<br />
                      Marketing
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">SEO</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Social Media</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Content Strategy</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Analytics</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Ads</span>
                    </div>

                    <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                      Online-Präsenz boosten mit smarten, datengesteuerten Marketingstrategien – für echte Ergebnisse und nachhaltiges Wachstum, statt leerer Versprechen.
                    </p>

                    <Link 
                      to="/digital-marketing"
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Branding Service */}
              <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-none rounded-tr-[100px] p-8 xs:p-10 sm:p-12 flex flex-col justify-end h-full">
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Branding &<br />
                      Identity
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Logo Design</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Brand Strategy</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Visual Identity</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Guidelines</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Brand Voice</span>
                    </div>

                    <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                      Mach deine Marke zum absoluten Hingucker, die im Gedächtnis bleibt – beeindrucke dein Publikum und hebe dich souverän vom Rest ab.
                    </p>

                    <Link 
                      to="/branding-identity"
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Virtual Assistance Service */}
              <div className="bg-white rounded-3xl xs:rounded-[48px] p-8 xs:p-10 sm:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                  {/* Purple Box - First on mobile */}
                  <div className="w-full md:w-[400px] md:order-last">
                    <div className="bg-[#9333EA] rounded-none rounded-tr-[100px] p-8 xs:p-10 sm:p-12 flex flex-col justify-end h-full">
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-fluid-4xl xs:text-fluid-5xl sm:text-fluid-6xl font-light tracking-tight leading-none mb-8">
                      Virtual<br />
                      Assistance
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Administrative Support</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Email Management</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Calendar Management</span>
                      <span className="px-4 py-2 bg-[#f5f5f5] rounded-full text-sm">Task Management</span>
                    </div>

                    <p className="text-fluid-lg text-gray-600 mb-8 tracking-tight leading-snug">
                      Professionelle Unterstützung für dein Business - effizient und zuverlässig.
                    </p>

                    <Link 
                      to="/virtual-assistance"
                      className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
                    >
                      Mehr dazu <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="section-spacing mb-32">
              <div className="text-fluid-3xl xs:text-fluid-4xl font-bold tracking-tight leading-tight content-spacing">
                Etwas nicht dabei?<br />
                Frag mal nach.
              </div>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center w-[163.26px] h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap"
              >
                Schreib uns <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;