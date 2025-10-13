import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="container-page flex items-center justify-between py-6">
      <div className="text-sm text-white/80">Yize Xue</div>
      <div className="flex items-center gap-3">
        <Link className="btn-secondary" href="#skills">Skills</Link>
        <Link className="btn-secondary" href="#projects">Projects</Link>
        <Link className="btn-secondary" href="#about">About</Link>
        <Link className="btn-primary" href="#contact">Contact</Link>
      </div>
    </nav>
  );
}


