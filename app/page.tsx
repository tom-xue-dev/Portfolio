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
        <div className="mt-6 space-y-6">
          {/* Professional Summary */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">Professional Summary</h3>
            <p className="text-white/80 leading-relaxed">
              Full-stack developer with expertise in building production-ready web applications, distributed systems, 
              and AI-powered solutions. Specialized in microservices architecture, cloud infrastructure (AWS), and 
              modern JavaScript/TypeScript ecosystems. Experienced in delivering scalable SaaS platforms, implementing 
              reinforcement learning systems, and designing event-driven architectures. Strong advocate for clean code, 
              comprehensive testing, and DevOps best practices.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Technical Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-brand-300 mb-2">Backend & Infrastructure</div>
                <ul className="text-white/70 space-y-1">
                  <li>• Microservices architecture with Docker & AWS ECS</li>
                  <li>• RESTful APIs with Node.js/Express & Python/FastAPI</li>
                  <li>• Infrastructure as Code with Terraform</li>
                  <li>• Event-driven systems with Redis pub/sub</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-brand-300 mb-2">Frontend & Full-Stack</div>
                <ul className="text-white/70 space-y-1">
                  <li>• Modern React with Next.js & TypeScript</li>
                  <li>• State management & real-time data handling</li>
                  <li>• Responsive UI with Tailwind CSS</li>
                  <li>• End-to-end testing with Jest</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-brand-300 mb-2">AI & Machine Learning</div>
                <ul className="text-white/70 space-y-1">
                  <li>• LLM integration (OpenAI, LangChain, RAG)</li>
                  <li>• Reinforcement Learning (PPO, DQN)</li>
                  <li>• Vector databases (Milvus) for semantic search</li>
                  <li>• PyTorch & Stable-Baselines3</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-brand-300 mb-2">Data & DevOps</div>
                <ul className="text-white/70 space-y-1">
                  <li>• Time-series data with TimescaleDB/PostgreSQL</li>
                  <li>• CI/CD pipelines with GitHub Actions</li>
                  <li>• Real-time data processing with WebSockets</li>
                  <li>• Cloud deployment & monitoring (AWS)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">Project Highlights</h3>
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <div className="font-medium text-white">AI-Powered SaaS Platform</div>
                <p className="text-white/70 mt-1">
                  Built a full-stack hiring platform with AI resume screening, payment integration, and multilingual support. 
                  Deployed on AWS ECS with Docker containerization and automated CI/CD pipelines.
                </p>
              </div>
              <div>
                <div className="font-medium text-white">Quantitative Trading System</div>
                <p className="text-white/70 mt-1">
                  Architected a microservices-based trading platform with real-time market data aggregation, 
                  event-driven communication, and automated order execution. Managed infrastructure with Terraform.
                </p>
              </div>
              <div>
                <div className="font-medium text-white">Reinforcement Learning Application</div>
                <p className="text-white/70 mt-1">
                  Developed a complete game in C++/Qt and trained an AI agent using PPO reinforcement learning. 
                  Implemented cross-process communication and automated UI interaction systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container-page py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4 flex gap-3 flex-wrap">
          <Link className="btn-primary" href="mailto:tomxue.coding@gmail.com">Email</Link>
          <Link className="btn-secondary" href="https://github.com/tom-xue-dev" target="_blank" rel="noreferrer">GitHub</Link>
        </div>
      </section>
      <footer className="container-page py-10 text-center text-white/60">© {new Date().getFullYear()} Yize Xue</footer>
    </main>
  );
}


