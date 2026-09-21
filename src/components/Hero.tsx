import React from 'react';
import { Github, Linkedin, Mail, Code2, ArrowRight } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { CodeEditorCard } from './CodeEditorCard';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pulsing Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personalDetails.statusBadge}</span>
            </div>

            {/* Main Greeting & Name Gradient Title */}
            <div>
              <p className="text-slate-400 text-lg font-medium tracking-wide">Hey, I'm</p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-1 mb-2">
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                  {personalDetails.name}
                </span>
              </h1>
              
              {/* Monospace Role Prefix */}
              <p className="font-mono text-cyan-400 text-sm sm:text-base md:text-lg font-semibold tracking-tight">
                {personalDetails.taglineRole}
              </p>
            </div>

            {/* Big Bold Headline Statement with Circled/Highlighted 'trust' */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 leading-snug">
              I build systems people can{' '}
              <span className="relative inline-block px-3 py-0.5 rounded-full border-2 border-cyan-400/90 text-cyan-300 bg-cyan-950/30 shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                {personalDetails.highlightWord}
              </span>
              .
            </h2>

            {/* Tagline Dot-Separated Keywords */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
              {personalDetails.keywordBadges.map((badge, idx) => (
                <React.Fragment key={badge}>
                  <span className="text-slate-300 hover:text-cyan-300 transition-colors font-medium">{badge}</span>
                  {idx < personalDetails.keywordBadges.length - 1 && (
                    <span className="text-pink-500 font-bold">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Intro Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Computer Science undergraduate specializing in crafting resilient{' '}
              <strong className="text-cyan-300 font-semibold">React</strong> &{' '}
              <strong className="text-violet-300 font-semibold">FastAPI</strong> web apps, integrating{' '}
              <strong className="text-pink-300 font-semibold">LLMs & RAG pipelines</strong>, and embedding proactive{' '}
              <strong className="text-emerald-300 font-semibold">Cybersecurity</strong> architectures.
            </p>

            {/* Action Buttons & Social Icons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-medium text-sm hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
              >
                <span>View Projects</span>
              </a>

              <a
                href={personalDetails.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 font-medium text-sm hover:bg-cyan-900/60 hover:text-white transition-all duration-300"
              >
                <span>Resume ↗</span>
              </a>

              {/* Social Quick Links */}
              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-amber-400 hover:bg-white/10 transition-all"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Code Editor Mockup Card */}
          <div className="lg:col-span-5 w-full">
            <CodeEditorCard />
          </div>

        </div>
      </div>
    </section>
  );
};
