import { ArrowUpRightIcon, GithubIcon } from "./Icons";

function ProjectCard({ project, animationDelay = 0 }) {
  return (
    <article
      className="group animate-fade-up flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl hover:shadow-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:shadow-black/20"
      style={{ animationDelay: `${animationDelay}ms` }}
    >

      {/* Project Image */}
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          {project.title}
          </h2>
          <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
        </div>

        <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-5 text-sm font-medium">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <GithubIcon className="h-4 w-4" /> Source
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Live Demo <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;