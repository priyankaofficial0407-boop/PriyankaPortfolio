import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Mark: Stylized code tag <PK/> */}
          <a
            href="#"
            className="group flex items-center space-x-1 font-mono text-xl font-bold tracking-wider"
          >
            <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">&lt;</span>
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent group-hover:opacity-90">
              PK
            </span>
            <span className="text-pink-400 group-hover:text-pink-300 transition-colors">/&gt;</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-cyan-300 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Resume Pill Button */}
          <div className="hidden md:flex items-center">
            <a
              href={personalDetails.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              <span className="px-4 py-2 transition-all ease-in duration-75 bg-[#090a0f] rounded-full group-hover:bg-opacity-0 text-white flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                Resume
                <ExternalLink className="w-3 h-3 ml-0.5 text-pink-400 group-hover:text-white" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f17] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={personalDetails.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-medium text-sm shadow-md"
            >
              <FileText className="w-4 h-4" />
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
