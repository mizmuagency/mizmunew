import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-black text-white mt-auto">
      <div className="container mx-auto py-8 xs:py-10 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-fluid-3xl lg:text-fluid-4xl font-bold tracking-tight leading-tight content-spacing">
                Dein Projekt<br />
                zusammen mit<br />
                mizmu?
              </h2>
            </div>
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-fluid-3xl lg:text-fluid-4xl font-bold tracking-tight leading-tight content-spacing">
                Schreib uns<br />
                <a href="mailto:hello@mizmu.ch" className="underline hover:opacity-80 transition-opacity">
                  hello@mizmu.ch
                </a>
              </h2>
              <p className="text-sm xs:text-base sm:text-lg mt-4 tracking-tight leading-snug">
                Wir sind eine digitale Agentur aus der Schweiz,<br />
                spezialisiert auf kreative Websites,<br />
                Digital Marketing, SEO und Virtual Assistent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;