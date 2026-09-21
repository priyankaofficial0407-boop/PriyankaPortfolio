import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Send, CheckCircle2, MessageSquare, Phone, Download, FileText } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate form submission success
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a question, opportunity, or project idea? Feel free to drop a message!
          </p>
        </div>

        {/* Grid Layout: Left Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#11131f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 card-glow">
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                Let's talk about building secure & intelligent systems.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you're hiring for a full-stack engineering role, interested in security assessments, or want to collaborate on AI projects, I'd love to connect.
              </p>

              {/* Contact Cards: Email & Phone */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Email Address</p>
                    <a
                      href={`mailto:${personalDetails.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {personalDetails.email}
                    </a>
                  </div>
                </div>

                {personalDetails.phone && (
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Phone Number</p>
                      <a
                        href={`tel:${personalDetails.phone}`}
                        className="text-sm font-semibold text-slate-200 hover:text-pink-300 transition-colors"
                      >
                        {personalDetails.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Resume Download Card */}
              <div className="pt-2">
                <a
                  href={personalDetails.resumePdfPath}
                  download="Priyanka_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 group"
                  title="Download Priyanka_Resume.pdf"
                >
                  <FileText className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                  <span>Download Resume</span>
                  <Download className="w-4 h-4 ml-1 text-pink-200 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Social Link Chips */}
              <div>
                <p className="text-xs text-slate-400 font-mono mb-3 uppercase tracking-wider">Social Profiles</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:bg-white/10 transition-all text-xs font-semibold"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:bg-white/10 transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalDetails.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-300 hover:bg-white/10 transition-all text-xs font-semibold"
                  >
                    <Code2 className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#11131f] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl card-glow relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Message Sent!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, Priyanka will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090a0f] border border-white/10 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
