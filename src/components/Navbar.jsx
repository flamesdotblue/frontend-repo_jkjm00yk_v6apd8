import React from 'react';
import { Shield, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm font-medium tracking-wider text-white/90">Crypto Flashing Overview</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <a href="#hero" className="hover:text-white">Home</a>
          <a href="#tools" className="hover:text-white">Tools</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <a
          href="#tools"
          className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          <Rocket className="h-4 w-4" /> Explore
        </a>
      </div>
    </header>
  );
};

export default Navbar;
