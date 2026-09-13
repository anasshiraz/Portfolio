import { Link } from "react-router-dom";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  TechnologyIcon,
} from "../components/Icons";

function Home() {
  const technologies = ["React", "JavaScript", "Tailwind CSS", "Python"];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative mx-auto grid min-h-[calc(100vh-90px)] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

        <div className="relative animate-slide-left">
          {/* Availability Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 dark:border-emerald-900/60 dark:bg-emerald-950/40">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"></span>

            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Open to opportunities
            </p>
          </div>

          {/* Introduction */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
            Anas Shiraz / Frontend Developer
          </p>

          {/* Name */}
          <h1 className="mt-3 max-w-3xl text-5xl font-bold tracking-[-0.04em] text-neutral-900 md:text-7xl dark:text-neutral-100">
            Where thoughtful design meets{" "}
            <span className="text-blue-500">clean code</span>.
          </h1>

          {/* Role */}
          <h2 className="mt-5 text-xl font-medium text-neutral-600 md:text-2xl dark:text-neutral-300">
            Hi, I'm Anas Shiraz — Frontend Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg">
            I'm a BCA student and Frontend Developer focused on building modern,
            responsive, and user-friendly web applications with React. I'm
            currently expanding my skills into backend development with Python
            and FastAPI as I work toward becoming a Full Stack Developer.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
            >
              View My Projects <ArrowUpRightIcon className="h-4 w-4" />
            </Link>

            <a
              href="/Anas_Shiraz_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-100 dark:hover:bg-neutral-900"
            >
              <DownloadIcon className="h-4 w-4" /> Download CV
            </a>

            <Link
              to="/contact"
              className="rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-100 dark:hover:bg-neutral-900"
            >
              Let's talk <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            <a
              href="https://github.com/anasshiraz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/anas-shiraz-8025822b8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-14 border-t border-neutral-200 pt-7 dark:border-neutral-800">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Currently working with
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 py-1.5 pl-1.5 pr-3 text-sm text-neutral-600 transition-colors hover:border-blue-400 hover:text-blue-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                  <TechnologyIcon technology={tech} />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-scale-in animation-delay-200 lg:ml-auto">
          <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-blue-500/20 via-transparent to-violet-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-4xl border border-neutral-200 bg-neutral-50 p-5 shadow-2xl shadow-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/20">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4 dark:border-neutral-800">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                anas.dev
              </span>
            </div>

            <div className="space-y-5 px-2 py-8 font-mono text-sm">
              <p className="text-neutral-400">
                <span className="text-violet-500">const</span> developer ={" "}
                <span className="text-blue-500">{"{"}</span>
              </p>

              <p className="pl-5 text-neutral-500">
                name: <span className="text-emerald-500">"Anas Shiraz"</span>,
              </p>

              <p className="pl-5 text-neutral-500">
                role:{" "}
                <span className="text-emerald-500">"Frontend Developer"</span>,
              </p>

              <p className="pl-5 text-neutral-500">
                stack:{" "}
                <span className="text-emerald-500">"React + Tailwind"</span>,
              </p>

              <p className="pl-5 text-neutral-500">
                learning:{" "}
                <span className="text-emerald-500">"Python + FastAPI"</span>,
              </p>

              <p className="pl-5 text-neutral-500">
                goal:{" "}
                <span className="text-emerald-500">"Full Stack Developer"</span>
              </p>

              <p className="text-blue-500">{"};"}</p>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
              <span>Currently building</span>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                Real-world projects ✦
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl animate-fade-up animation-delay-300 grid-cols-2 border-y border-neutral-200 px-6 py-8 dark:border-neutral-800 sm:grid-cols-4">
        {[
          ["02+", "Projects shipped"],
          ["04", "Core technologies"],
          ["React", "Primary stack"],
          ["FastAPI", "Currently learning"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border-neutral-200 px-4 first:pl-0 dark:border-neutral-800 sm:border-l sm:pl-6"
          >
            <p className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {value}
            </p>

            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {label}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
