import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />

      <Skills />

      <FeaturedProjects />

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


