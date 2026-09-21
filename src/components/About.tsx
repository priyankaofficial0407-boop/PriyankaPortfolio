import React from 'react';
import { User, GraduationCap, ShieldCheck, Cpu, Sparkles, MapPin, Calendar, Globe } from 'lucide-react';
import { aboutContent, education, languages } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-white/5 bg-[#090a0f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Biography</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            About <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Priyanka</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {aboutContent.subheading}
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-[#11131f] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden card-glow">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-400 pointer-events-none">
              <Sparkles className="w-48 h-48" />
            </div>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed relative z-10">
              {aboutContent.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Core Values / Focus Chips */}
            <div className="pt-8 border-t border-white/10 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">CS Undergrad</h4>
                  <p className="text-[11px] text-slate-400">B.E. CSE (2023–2027)</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Applied AI</h4>
                  <p className="text-[11px] text-slate-400">LLMs & RAG Architectures</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-pink-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-200">Cybersecurity</h4>
                  <p className="text-[11px] text-slate-400">ToriiMinds Intern</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Education Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#11131f] border border-white/10 rounded-2xl p-5 flex flex-col justify-center items-center text-center hover:border-cyan-500/40 transition-all duration-300 card-glow"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Education Card */}
            <div className="bg-[#11131f] border border-white/10 rounded-2xl p-6 shadow-xl card-glow space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-100">{education.degree}</h3>
                <p className="text-sm font-semibold text-pink-400">{education.institution}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {education.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {education.period}
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Cumulative Grade Point Average:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono font-bold">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>

            {/* Languages Spoken */}
            <div className="bg-[#11131f] border border-white/10 rounded-2xl p-4 shadow-xl card-glow flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Globe className="w-4 h-4 text-pink-400" />
                <span>Languages:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-200 text-xs font-mono"
                  >
                    <span className="text-cyan-300 font-semibold">{lang.name}</span> ({lang.proficiency})
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


