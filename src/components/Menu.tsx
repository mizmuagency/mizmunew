import React, { useState, useRef } from 'react';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompetenciesExpanded, setIsCompetenciesExpanded] = useState(false);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsOpen(false);
    setIsCompetenciesExpanded(false);
  };

  const toggleCompetencies = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCompetenciesExpanded(!isCompetenciesExpanded);
  };

  return (
    <div className="fixed top-safe-top right-safe-right z-50 p-4 xs:p-6 sm:p-8">
      <div className="relative group">
        {/* Menu Button */}
        <button 
          className="w-[44px] h-[44px] rounded-full border-2 border-black flex flex-col items-center justify-center gap-1.5 hover:bg-black hover:[&>div]:bg-white transition-colors group"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <div className="w-5 h-0.5 bg-black transition-colors" />
          <div className="w-5 h-0.5 bg-black transition-colors" />
        </button>
        
        {/* Menu Container */}
        <div 
          className={`
            fixed md:absolute inset-0 md:inset-auto md:top-full md:right-0
            pointer-events-none
            ${isOpen ? 'visible' : 'invisible md:group-hover:visible'}
          `}
        >
          {/* Backdrop - Mobile only */}
          <div 
            className={`
              absolute inset-0 bg-black/20 backdrop-blur-sm
              transition-opacity duration-300
              md:hidden
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={handleClose}
          />

          {/* Menu Content */}
          <div 
            className={`
              w-full md:w-[304px]
              max-h-[80vh] md:max-h-[calc(100vh-120px)]
              bg-white
              fixed right-0 top-0 md:relative
              transition-all duration-300
              rounded-b-2xl md:rounded-2xl
              shadow-2xl
              overflow-auto
              md:mt-4
              pointer-events-auto
              ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
              ${isOpen ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Mobile only */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity touch-target md:hidden"
            >
              <X size={24} />
            </button>
            
            {/* Menu Content */}
            <div ref={menuContentRef} className="flex flex-col p-8 pt-20 md:pt-8">
              {/* Main Navigation */}
              <nav className="flex flex-col space-y-1">
                {/* Projekte */}
                <Link 
                  to="/projects" 
                  onClick={handleClose} 
                  className="py-2 text-xl tracking-tight leading-none hover:opacity-70 transition-opacity"
                >
                  Projekte
                </Link>

                {/* Kompetenzen with submenu */}
                <div>
                  <div className="flex items-center justify-between">
                    <Link 
                      to="/competencies" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                      className="py-2 text-xl tracking-tight leading-none hover:opacity-70 transition-opacity"
                    >
                      Kompetenzen
                    </Link>
                    <button
                      onClick={toggleCompetencies}
                      className="p-2 hover:opacity-70 transition-opacity"
                    >
                      {isCompetenciesExpanded ? <Minus size={20} /> : <Plus size={20} />}
                    </button>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isCompetenciesExpanded ? 'max-h-[160px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link
                        to="/website-design"
                        onClick={handleClose}
                        className="text-[15px] text-gray-600 hover:text-black transition-colors py-1"
                      >
                        Web Development
                      </Link>
                      <Link
                        to="/digital-marketing"
                        onClick={handleClose}
                        className="text-[15px] text-gray-600 hover:text-black transition-colors py-1"
                      >
                        Digital Marketing
                      </Link>
                      <Link
                        to="/branding-identity"
                        onClick={handleClose}
                        className="text-[15px] text-gray-600 hover:text-black transition-colors py-1"
                      >
                        Branding & Identity
                      </Link>
                      <Link
                        to="/virtual-assistance"
                        onClick={handleClose}
                        className="text-[15px] text-gray-600 hover:text-black transition-colors py-1"
                      >
                        Virtual Assistance
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Über uns */}
                <Link 
                  to="/about" 
                  onClick={handleClose} 
                  className="py-2 text-xl tracking-tight leading-none hover:opacity-70 transition-opacity"
                >
                  Über uns
                </Link>

                {/* Blog */}
                <Link 
                  to="/blog" 
                  onClick={handleClose} 
                  className="py-2 text-xl tracking-tight leading-none hover:opacity-70 transition-opacity"
                >
                  Blog
                </Link>

                {/* Kontakt */}
                <Link 
                  to="/contact" 
                  onClick={handleClose} 
                  className="py-2 text-xl tracking-tight leading-none hover:opacity-70 transition-opacity"
                >
                  Kontakt
                </Link>
              </nav>

              {/* Projekt starten button */}
              <Link 
                to="/contact" 
                onClick={handleClose} 
                className="inline-flex items-center justify-center w-full h-[44px] border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors tracking-tight whitespace-nowrap mt-6"
              >
                Projekt starten <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;