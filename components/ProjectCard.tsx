type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language?: string | null;
  stargazers_count: number;
  updated_at: string;
};

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a href={repo.html_url} target="_blank" rel="noreferrer" className="card block p-5 hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{repo.name}</h3>
        {repo.language ? (
          <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-white/80">{repo.language}</span>
        ) : null}
      </div>
      <p className="mt-2 line-clamp-3 text-sm text-white/80">{repo.description ?? 'No description provided.'}</p>
      <div className="mt-4 flex items-center gap-4 text-sm text-white/70">
        <span>★ {repo.stargazers_count}</span>
        <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </a>
  );
}


