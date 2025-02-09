import React from 'react';
import GradientCanvas from '../components/GradientCanvas';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'DAZZLEYE',
      category: 'Webshop, Branding, Support',
      description:
        "Do you know the enchanting solution for effortless eye make-up? It's called DAZZLEYE and is the revolutionary eyeliner sticker that decorates your eyes with shine and style in seconds.",
      image:
        'https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK09pVUE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--389b5546e1c16f6f5784e9ae394f14a96909ae96/holymusedazzle.png',
    },
  ];

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
            <div className="max-w-4xl mb-20 md:mb-32">
              <h1 className="text-fluid-6xl xs:text-fluid-7xl font-light tracking-tight leading-[1.1] mb-6">
                Unsere
                <br />
                Projekte
              </h1>
              <p className="text-fluid-lg text-gray-600 max-w-xl tracking-tight leading-snug">
                Eine Auswahl unserer erfolgreich umgesetzten Projekte. Jedes
                Projekt erzählt seine eigene Geschichte.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {projects.map((project, index) => (
                <div key={index} className="group relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-light">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Projects;