import React from 'react';
import { BackgroundStars } from './components/BackgroundStars';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { JourneyCertifications } from './components/JourneyCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App Rendering Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-[#090a0f] text-red-400 font-mono text-sm min-h-screen">
          <h1 className="text-xl font-bold text-red-500 mb-4">Rendering Error Detected</h1>
          <p className="mb-2 text-slate-300">Message: {this.state.error?.message}</p>
          <pre className="p-4 bg-black/50 border border-red-500/30 rounded overflow-x-auto text-xs text-red-300">
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
        {/* Background Starfield & Light Flares */}
        <BackgroundStars />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Page Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <JourneyCertifications />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;

