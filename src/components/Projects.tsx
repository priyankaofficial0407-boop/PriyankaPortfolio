import React from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-400 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Featured <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Real-world full-stack, AI/LLM, privacy-preserving ML, and intelligent search systems.
          </p>
        </div>

        {/* 4-Card 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#11131f] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all duration-300 card-glow group"
            >
              <div>
                {/* Header row: Icon & Date Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    {project.iconType === 'shield' ? (
                      <Shield className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Sparkles className="w-5 h-5" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    {project.dateRange}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                    {project.subtitle}
                  </p>
                )}

                {/* Project Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 text-slate-400 text-xs">
                  {project.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Section: Tech Stack & Action Links */}
              <div className="space-y-5 pt-4 border-t border-white/10">
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[11px] font-mono border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Buttons */}
                {/* 
                  NOTE FOR PRIYANKA: 
                  Replace project.liveUrl and project.githubUrl in src/data/portfolioData.ts
                  when you deploy these projects or host them on GitHub!
                */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target={project.liveUrl !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      project.liveUrl !== '#'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90 shadow-md'
                        : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-200'
                    }`}
                    title={project.liveUrl === '#' ? 'Add your Live Demo URL in portfolioData.ts' : 'View Live Demo'}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>

                  {/* GitHub button placeholder - update project.githubUrl in portfolioData.ts with real repo URL when ready */}
                  <a
                    href={project.githubUrl}
                    target={project.githubUrl !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      project.githubUrl !== '#'
                        ? 'border-cyan-500/50 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-950/40'
                        : 'border-white/10 text-slate-400 bg-white/5 hover:bg-white/10 hover:text-slate-200'
                    }`}
                    title={project.githubUrl === '#' ? 'Needs real GitHub repository URL in portfolioData.ts' : 'View Source Code'}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
