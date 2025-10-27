import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="hero" className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Shiny, Holographic Crypto Motion
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-200 md:text-lg">
          A futuristic cover experience inspired by dynamic, circular motion of crypto coins on a dark canvas. This page summarizes common flashing tool descriptions purely for educational and UI demonstration purposes.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tools"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            View Tools
          </a>
          <a
            href="#faq"
            className="rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
