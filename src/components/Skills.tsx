import React from 'react';
import { Cpu, Code2, Layout, Server, Database, ShieldCheck } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

// Icon Map helper
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5 text-cyan-400" />;
    case 'Layout':
      return <Layout className="w-5 h-5 text-pink-400" />;
    case 'Server':
      return <Server className="w-5 h-5 text-purple-400" />;
    case 'Database':
      return <Database className="w-5 h-5 text-amber-400" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    default:
      return <Cpu className="w-5 h-5 text-cyan-400" />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative border-t border-white/5 bg-[#090a0f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Technical <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Languages, frameworks, databases, security tools, and modern AI capabilities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#11131f] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-500/40 transition-all duration-300 card-glow flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm font-medium hover:bg-cyan-950/40 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200 cursor-default flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
