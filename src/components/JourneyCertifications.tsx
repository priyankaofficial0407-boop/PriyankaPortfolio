import React from 'react';
import { Award, Trophy, CheckCircle2, ShieldCheck, Cloud, Cpu, Code } from 'lucide-react';
import { certifications, achievements } from '../data/portfolioData';

export const JourneyCertifications: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative border-t border-white/5 bg-[#090a0f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Learning & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified credentials, technical achievements, and hackathon leadership.
          </p>
        </div>

        {/* Layout Grid: Left = Certifications, Right = Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Professional Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-[#11131f] border border-white/10 rounded-2xl p-5 flex items-center justify-between shadow-lg hover:border-cyan-500/40 transition-all duration-300 card-glow"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                      {cert.badge === 'AWS Cloud' ? (
                        <Cloud className="w-5 h-5" />
                      ) : cert.badge === 'Security' ? (
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      ) : cert.badge === 'AI Engineering' || cert.badge === 'Generative AI' ? (
                        <Cpu className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Code className="w-5 h-5 text-pink-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{cert.title}</h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {cert.issuer} {cert.date && <span className="text-pink-400 font-mono text-[11px] ml-2">• {cert.date}</span>}
                      </p>
                    </div>
                  </div>

                  {cert.badge && (
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-300">
                      {cert.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Leadership */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-pink-400" />
              <span>Achievements & Leadership</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="bg-[#11131f] border border-white/10 rounded-2xl p-5 shadow-lg hover:border-pink-500/40 transition-all duration-300 card-glow"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 shrink-0 mt-0.5">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-100 mb-1">{ach.title}</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">{ach.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Summary Highlight Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-pink-950/40 border border-cyan-500/30 text-slate-300 text-xs leading-relaxed">
                <p className="flex items-center gap-2 font-semibold text-cyan-300 mb-1">
                  <CheckCircle2 className="w-4 h-4" /> Continuous Growth Mindset
                </p>
                Actively pursuing advanced certifications in AWS Cloud Architecture, LLM application security, and system optimization.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
