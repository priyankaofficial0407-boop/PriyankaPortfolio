import React from 'react';
import { ArrowUp, Github, Linkedin, Code2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[#07080c] border-t border-white/5 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Copyright */}
          <div className="flex items-center space-x-2">
            <span className="font-mono text-cyan-400 font-bold">&lt;PK/&gt;</span>
            <span>© {new Date().getFullYear()} Priyanka Kumari. All rights reserved.</span>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-950/40 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </footer>
  );
};
