import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Professional <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on cybersecurity engineering and security assessments.
          </p>
        </div>

        {/* Timeline Layout Container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Vertical Timeline Bar */}
              <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500/20 group-hover:w-1 transition-all" />
              
              {/* Timeline Indicator Badge */}
              <div className="absolute -left-[13px] top-1.5 w-7 h-7 rounded-full bg-[#090a0f] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                <ShieldAlert className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="bg-[#11131f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300 card-glow">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-pink-400 font-semibold text-sm">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Resume Achievement Bullet Points */}
                <ul className="space-y-3 mb-6 text-slate-300 text-sm leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
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
