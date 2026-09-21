import React, { useState } from 'react';
import { ShieldCheck, Code, Copy, Check } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export const CodeEditorCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeString = JSON.stringify(personalDetails.codeEditor.objectData, null, 2);
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { objectData } = personalDetails.codeEditor;

  return (
    <div className="relative group w-full max-w-lg mx-auto lg:max-w-none">
      {/* Outer Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />

      {/* Main Card Container */}
      <div className="relative rounded-2xl bg-[#0d0f17] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        
        {/* Editor Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#111422] border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>

          {/* Active File Tab */}
          <div className="flex items-center space-x-2 bg-[#090a0f] px-3 py-1 rounded-t-md border-t border-x border-cyan-500/30 text-cyan-300">
            <Code className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold text-xs">{personalDetails.codeEditor.filename}</span>
          </div>

          {/* Copy Code Button */}
          <button
            onClick={handleCopy}
            className="text-slate-400 hover:text-cyan-300 transition-colors p-1"
            title="Copy Developer Object"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Floating Specialization Badge */}
        <div className="absolute top-14 right-4 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-950/90 to-slate-900/90 border border-purple-500/40 text-purple-200 text-xs font-semibold shadow-lg backdrop-blur-md">
          <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
          <span>{personalDetails.codeEditor.badgeText}</span>
        </div>

        {/* Code Snippet Area */}
        <div className="p-4 sm:p-6 overflow-x-auto space-y-1 leading-relaxed text-slate-300 bg-[#0a0c14]/90">
          <div>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-cyan-300">developerProfile</span> = {'{'}
          </div>

          <div className="pl-4">
            <span className="text-pink-400">name:</span>{' '}
            <span className="text-emerald-300">"{objectData.name}"</span>,
          </div>

          <div className="pl-4">
            <span className="text-pink-400">role:</span>{' '}
            <span className="text-emerald-300">"{objectData.role}"</span>,
          </div>

          <div className="pl-4">
            <span className="text-pink-400">location:</span>{' '}
            <span className="text-emerald-300">"{objectData.location}"</span>,
          </div>

          <div className="pl-4">
            <span className="text-pink-400">stack:</span> {'{'}
          </div>

          <div className="pl-8">
            <span className="text-cyan-400">languages:</span> [
            {(objectData.stack.languages || []).map((item, idx) => (
              <span key={item}>
                <span className="text-emerald-300">"{item}"</span>
                {idx < (objectData.stack.languages || []).length - 1 ? ', ' : ''}
              </span>
            ))}
            ],
          </div>

          <div className="pl-8">
            <span className="text-cyan-400">frontend:</span> [
            {(objectData.stack.frontend || []).map((item, idx) => (
              <span key={item}>
                <span className="text-amber-300">"{item}"</span>
                {idx < (objectData.stack.frontend || []).length - 1 ? ', ' : ''}
              </span>
            ))}
            ],
          </div>

          <div className="pl-8">
            <span className="text-cyan-400">backend:</span> [
            {(objectData.stack.backend || []).map((item, idx) => (
              <span key={item}>
                <span className="text-purple-300">"{item}"</span>
                {idx < (objectData.stack.backend || []).length - 1 ? ', ' : ''}
              </span>
            ))}
            ],
          </div>

          <div className="pl-8">
            <span className="text-cyan-400">security_tools:</span> [
            {(objectData.stack.security_tools || []).map((item, idx) => (
              <span key={item}>
                <span className="text-pink-300">"{item}"</span>
                {idx < (objectData.stack.security_tools || []).length - 1 ? ', ' : ''}
              </span>
            ))}
            ]
          </div>

          <div className="pl-4">{'}'},</div>

          <div className="pl-4">
            <span className="text-purple-400">getStatus:</span> () = &gt; {'{'}
          </div>
          <div className="pl-8">
            <span className="text-purple-400">return</span>{' '}
            <span className="text-emerald-300">"{objectData.status}"</span>;
          </div>
          <div className="pl-4">{'}'}</div>

          <div>{'};'}</div>
        </div>

        {/* Footer Bar of Code Window */}
        <div className="px-4 py-2 bg-[#0d0f17] border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500">
          <span>UTF-8</span>
          <span>TypeScript • React</span>
          <span>Ln 24, Col 2</span>
        </div>
      </div>
    </div>
  );
};
