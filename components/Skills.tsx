type Skill = {
  name: string;
  emphasis?: boolean;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Core Stack',
    skills: [
      { name: 'Python', emphasis: true },
      { name: 'TypeScript', emphasis: true },
      { name: 'C#', emphasis: true },
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', emphasis: true },
      {name: 'html'},
      {name: 'css'},
      {name: 'typescript'},
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'FastAPI' },
      { name: 'REST' },
      { name: 'Web APIs' }
    ]
  },
  {
    title: 'AI/LLM',
    skills: [
      { name: 'RAG', emphasis: true },
      { name: 'LLM Integration(LangChain, OpenAI, Hugging Face)' },
      { name:'Vector Database(Milvus)'},
      { name: 'RF(PPO/DQN),ML(Random Forest, Decision Tree)' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'AWS(EC2, S3, RDS,EKS)',emphasis: true },
      { name: 'Docker', emphasis: true },
      { name: 'GitHub Actions',emphasis: true },
      { name: 'Vercel'},
      { name: 'Git' },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', emphasis: true },
      { name: 'MySQL', emphasis: true },
      { name: 'MongoDB', emphasis: true },
      { name: 'Redis', emphasis: true },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="container-page py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="card p-6">
            <div className="text-lg font-medium">{group.title}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s.name}
                  className={
                    'rounded-lg border px-2.5 py-1 text-sm ' +
                    (s.emphasis
                      ? 'border-brand-400/50 bg-brand-500/20 text-white'
                      : 'border-white/10 bg-white/10 text-white/90')
                  }
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



