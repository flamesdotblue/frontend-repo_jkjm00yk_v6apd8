import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ToolsGrid from './components/ToolsGrid.jsx';
import FAQ from './components/FAQ.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="relative">
        <Hero />

        <section className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Highlighted Tools & Concepts</h2>
            <p className="mt-3 text-zinc-300">An educational overview of popular flashing-related tool descriptions shared across the crypto community.</p>
          </div>
          <ToolsGrid />
        </section>

        <section className="relative mx-auto max-w-6xl px-6 pb-20">
          <FAQ />
        </section>
      </main>

      <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/40">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-400">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Crypto Flashing Overview. For educational purposes only.</p>
            <div className="flex items-center gap-4">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#tools" className="hover:text-white">Tools</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
