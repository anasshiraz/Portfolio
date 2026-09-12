import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <main className="mx-auto min-h-[calc(100vh-90px)] max-w-6xl px-6 py-20">
      
      {/* Page Heading */}
      <section className="relative animate-slide-left">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
          Projects / 02
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl dark:text-neutral-100">
          Things I've built.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          A collection of projects I've built while learning and improving my
          skills in frontend and full-stack development.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-500 dark:bg-neutral-900 dark:text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Selected work · 2024—2026
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mt-20 border-t border-neutral-200 pt-16 dark:border-neutral-800">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} animationDelay={index * 120} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;