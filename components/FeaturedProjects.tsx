'use client';

import { useState } from 'react';
import Image from 'next/image';

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
};

type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  screenshots: Screenshot[];
  links: {
    demo?: string;
    github?: string;
  };
};

const featuredProjects: FeaturedProject[] = [
  {
    name: 'ReadySetHire',
    tagline: 'AI-Powered Hiring Platform',
    description:
      'A full-stack SaaS platform that streamlines the hiring workflow with AI-powered resume screening and job search aggregation. Features a subscription-based payment system and multilingual support (English/Chinese).',
    techStack: [
      'TypeScript',
      'React',
      'Express.js',
      'Docker',
      'AWS ECS',
      'Jest',
      'GitHub Actions',
    ],
    features: [
      'AI resume scoring with multiple accuracy tiers',
      'Real-time job search aggregation',
      'Team collaboration with shared evaluations',
      'Subscription payment system (Trial/Premium)',
      'Multilingual UI (EN/CN)',
    ],
    screenshots: [
      {
        src: '/projects/readysethire-landing.png',
        alt: 'ReadySetHire Landing Page',
        caption: 'Landing Page',
      },
      {
        src: '/projects/readysethire-pricing.png',
        alt: 'ReadySetHire Pricing Page',
        caption: 'Subscription Plans',
      },
      {
        src: '/projects/readysethire-jobs.png',
        alt: 'ReadySetHire Job Search',
        caption: 'Job Search & Details',
      },
    ],
    links: {
      demo: 'http://readysethire-bucket.s3-website-ap-southeast-2.amazonaws.com/',
      github: 'https://github.com/tom-xue-dev/ReadySetHire',
    },
  },
  {
    name: 'RF-for-shapez',
    tagline: 'Reinforcement Learning Game AI',
    description:
      'An AI-driven automation project that combines game development, reinforcement learning, and automation scripting. Built the Shapez game from scratch using C++ and Qt, then trained a PPO-based AI agent to autonomously play the game through shared memory communication and automated UI interactions.',
    techStack: [
      'C++',
      'Qt',
      'Python',
      'PPO (Reinforcement Learning)',
      'PyTorch',
      'Stable-Baselines3',
      'PyQt5',
      'PyAutoGUI',
    ],
    features: [
      'Full game implementation in C++ with Qt framework',
      'PPO reinforcement learning with action masking',
      'Shared memory IPC for game state reading',
      'PyQt5 training GUI with model selection',
      'Automated gameplay via PyAutoGUI screen matching',
      'Custom Gymnasium environment integration',
    ],
    screenshots: [
      {
        src: '/projects/shapez-game.png',
        alt: 'Shapez Game Interface',
        caption: 'Game Interface',
      },
      {
        src: '/projects/shapez-gui.png',
        alt: 'PPO Training GUI',
        caption: 'Training Interface',
      },
    ],
    links: {
      github: 'https://github.com/tom-xue-dev/RF-for-shapez',
    },
  },
  {
    name: 'Quant Trading System',
    tagline: 'Cryptocurrency Algorithmic Trading Platform',
    description:
      'A production-ready microservices-based quantitative trading system for cryptocurrency markets. Features real-time market data ingestion via WebSocket, time-series data storage with TimescaleDB, Redis pub/sub for inter-service communication, and automated order execution with risk management. Deployed on AWS ECS with infrastructure managed via Terraform.',
    techStack: [
      'Python',
      'CCXT Pro',
      'TimescaleDB',
      'Redis',
      'WebSocket',
      'PostgreSQL',
      'Docker',
      'AWS ECS',
      'Terraform',
      'MkDocs',
    ],
    features: [
      'Real-time market data aggregation from exchanges',
      'Time-series storage with TimescaleDB for ticker data',
      'Event-driven microservices architecture (pub/sub)',
      'Feature calculation & rolling window analysis',
      'Automated order management with risk controls',
      'Asset pool rebalancing & portfolio management',
    ],
    screenshots: [],
    links: {
      demo: 'https://tom-xue-dev.github.io/quant_trading/architecture/',
      github: 'https://github.com/tom-xue-dev/quant_trading',
    },
  },
];

function ProjectCard({ project }: { project: FeaturedProject }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="card overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-500/20 to-transparent p-6 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
            <p className="mt-1 text-brand-300 font-medium">{project.tagline}</p>
          </div>
          <div className="flex gap-3">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm"
              >
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-sm"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-white/80 leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-brand-400/50 bg-brand-500/20 px-3 py-1 text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-white/80">
                <span className="mt-1 text-brand-400">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots Toggle */}
        {project.screenshots.length > 0 && (
          <div className="mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-brand-300 hover:text-brand-200 transition-colors"
            >
              <span
                className={`transform transition-transform duration-200 ${
                  isExpanded ? 'rotate-90' : ''
                }`}
              >
                ▶
              </span>
              {isExpanded ? 'Hide Screenshots' : 'View Screenshots'}
              <span className="text-white/40">({project.screenshots.length})</span>
            </button>

            {/* Screenshots Grid */}
            <div
              className={`mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="group relative">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/5">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-white/60">{screenshot.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="featured" className="container-page py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <span className="text-sm text-white/60">Highlighted work</span>
      </div>

      <div className="mt-6 space-y-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
