import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container-page pt-10 pb-10 md:pt-20 md:pb-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-brand-300 font-semibold">Full‑stack developer</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl title-gradient">
            Python • C++ • JS/TS
          </h1>
          <p className="mt-6 text-lg text-white/80">
            I build performant web apps, LLM integrations, and systems. Inspired by clean design and reliable engineering.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="btn-primary">View Projects</Link>
            <Link href="https://github.com/tom-xue-dev" className="btn-secondary" target="_blank" rel="noreferrer">GitHub</Link>
          </div>
        </div>
        <div className="card p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">3+</div>
              <div className="text-sm text-white/70">Repos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm text-white/70">Stars</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Full‑stack</div>
              <div className="text-sm text-white/70">Python/C++/TS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


