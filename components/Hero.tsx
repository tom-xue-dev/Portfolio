"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Hero() {
  const summaryText = useMemo(
    () =>
      `Full-stack developer highly skilled in Python (FastAPI, Celery) and TypeScript (React, Node.js). Proven experience in building scalable web apps and distributed data systems, integrating relational (PostgreSQL) and vector (Milvus) databases. Proficient in API design, containerized deployment with Docker, and CI/CD pipelines (GitHub Actions). Hands-on with cloud platforms (AWS, GCP), delivering production-ready, high-performance solutions. Experienced in Agile/Scrum development.`,
    []
  );

  const [typed, setTyped] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const speedMs = 10; // typing speed per character
    const intervalId = setInterval(() => {
      index += 1;
      setTyped(summaryText.slice(0, index));
      if (index >= summaryText.length) {
        clearInterval(intervalId);
        setIsDone(true);
      }
    }, speedMs);
    return () => clearInterval(intervalId);
  }, [summaryText]);

  return (
    <section className="container-page pt-10 pb-10 md:pt-20 md:pb-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-brand-300 font-semibold">Full‑stack developer</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl title-gradient">
            Python • C++ • JS/TS
          </h1>
          <p className="mt-6 text-lg text-white/80" aria-live="polite">
            {typed}
            {!isDone && <span className="typewriter-cursor">|</span>}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#featured" className="btn-primary">View Projects</Link>
            <Link href="https://github.com/tom-xue-dev" className="btn-secondary" target="_blank" rel="noreferrer">GitHub</Link>
          </div>
        </div>
        <div className="card p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-white/70">Featured Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Full-stack</div>
              <div className="text-sm text-white/70">Developer</div>
            </div>
            <div>
              <div className="text-3xl font-bold">AI/Cloud</div>
              <div className="text-sm text-white/70">Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



