 

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description?: string | null;
  stargazers_count?: number;
  language?: string | null;
  updated_at?: string;
};

export default function ProjectCard({ repo }: { repo: GitHubRepo }) {
  const description = repo.description && repo.description.trim().length > 0
    ? repo.description
    : 'No description provided.';

  const updatedLabel = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString()
    : undefined;

  return (
    <article className="card p-6 h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight">{repo.name}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/60">
          {repo.language && (
            <span className="rounded-md bg-white/5 px-2 py-1">{repo.language}</span>
          )}
          {typeof repo.stargazers_count === 'number' && (
            <span className="rounded-md bg-white/5 px-2 py-1">★ {repo.stargazers_count}</span>
          )}
          {updatedLabel && (
            <span className="rounded-md bg-white/5 px-2 py-1">Updated {updatedLabel}</span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <a
          href={repo.html_url}
          className="btn-secondary"
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${repo.name} on GitHub`}
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
}


