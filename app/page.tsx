import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Skills from '@/components/Skills';

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />

      <Skills />

      <section id="projects" className="container-page py-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <p className="mt-2 text-white/70">GitHub repos.</p>
        <ProjectsList />
      </section>

      <section id="about" className="container-page py-16">
        <h2 className="text-2xl font-semibold">About</h2>
        <div className="mt-4 card p-6 text-white/80">
          <p>
            Full‑stack developer focused on developer experience, performance, and reliable systems. Experienced with
            Next.js, Node.js, Python, C++ and leveraging LLMs in products.
          </p>
        </div>
      </section>

      <section id="contact" className="container-page py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4 flex gap-3">
          <Link className="btn-primary" href="mailto:tomxue.coding@gmail.com">Email</Link>
          <Link className="btn-secondary" href="https://github.com/tom-xue-dev" target="_blank" rel="noreferrer">GitHub</Link>
        </div>
      </section>
      <footer className="container-page py-10 text-center text-white/60">© {new Date().getFullYear()} Yize Xue</footer>
    </main>
  );
}

async function fetchRepos() {
  const res = await fetch('https://api.github.com/users/tom-xue-dev/repos?per_page=12&sort=updated', {
    // Revalidate every hour on Vercel edge cache
    next: { revalidate: 3600 },
    headers: {
      Accept: 'application/vnd.github+json'
    }
  });
  if (!res.ok) {
    return [] as any[];
  }
  const data = (await res.json()) as any[];
  return data.filter(r => !r.fork);
}

async function ProjectsList() {
  const repos = await fetchRepos();
  if (!repos || repos.length === 0) {
    return (
      <div className="mt-6 text-white/70">No repositories found. Add projects later; this will auto‑populate.</div>
    );
  }
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}


