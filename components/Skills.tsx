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
      { name: 'C++', emphasis: true },
      { name: 'TypeScript', emphasis: true },
      { name: 'JavaScript' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', emphasis: true },
      { name: 'React' },
      { name: 'Tailwind CSS' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'REST' },
      { name: 'Web APIs' }
    ]
  },
  {
    title: 'AI/LLM',
    skills: [
      { name: 'LLM Integration', emphasis: true },
      { name: 'Prompt Engineering' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Vercel', emphasis: true },
      { name: 'Docker' },
      { name: 'GitHub Actions' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'VS Code' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="container-page py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <span className="text-sm text-white/60">Focus from SE‑CV</span>
      </div>
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


