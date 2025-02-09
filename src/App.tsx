import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebsiteDesign from './pages/WebsiteDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import BrandingIdentity from './pages/BrandingIdentity';
import VirtualAssistance from './pages/VirtualAssistance';
import About from './pages/About';
import Competencies from './pages/Competencies';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-design" element={<WebsiteDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/branding-identity" element={<BrandingIdentity />} />
        <Route path="/virtual-assistance" element={<VirtualAssistance />} />
        <Route path="/about" element={<About />} />
        <Route path="/competencies" element={<Competencies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;