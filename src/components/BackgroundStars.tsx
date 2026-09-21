import React from 'react';

export const BackgroundStars: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-starfield">
      {/* Ambient gradient glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[160px]" />
    </div>
  );
};
