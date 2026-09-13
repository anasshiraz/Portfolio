import skills from "../data/skills";
import { TechnologyIcon } from "../components/Icons";

function About() {
  const principles = [
    {
      number: "01",
      title: "Learn by building",
      description:
        "I understand development best by turning what I learn into real projects and working through problems along the way.",
    },
    {
      number: "02",
      title: "Keep improving",
      description:
        "I continuously work on improving my coding, understanding better development practices, and writing cleaner and more maintainable code.",
    },
    {
      number: "03",
      title: "Understand, don't just copy",
      description:
        "I believe in understanding how things work, experimenting with different approaches, and learning from mistakes while building.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section className="relative animate-scale-in overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-12 dark:border-neutral-800 dark:bg-neutral-900/60 md:px-12 md:py-16">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
            About me / 01
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-neutral-900 dark:text-neutral-100 md:text-6xl">
            Curious developer.{" "}
            <span className="text-neutral-400 dark:text-neutral-600">
              Always building.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            I'm Anas Shiraz, a BCA student and Frontend Developer who enjoys
            building modern, responsive, and user-friendly web applications.
            I primarily work with JavaScript, React, Tailwind CSS, Redux, and
            React Router, and I enjoy turning ideas into practical projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-950">
              Based in Srinagar, India
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 dark:border-neutral-700 dark:bg-neutral-950">
              Open to opportunities
            </span>
          </div>
        </div>
      </section>

      <section className="mt-20 animate-fade-up animation-delay-100">
        <div className="flex items-end justify-between gap-6 border-b border-neutral-200 pb-5 dark:border-neutral-800">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
              How I work
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              A few things I value.
            </h2>
          </div>
          <span className="hidden text-sm text-neutral-400 sm:block">
            Principles over patterns
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg hover:shadow-neutral-200/40 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600 dark:hover:shadow-black/20"
            >
              <span className="font-mono text-xs text-blue-500">
                {principle.number}
              </span>

              <h3 className="mt-10 font-medium text-neutral-900 dark:text-neutral-100">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 animate-slide-left grid gap-10 border-t border-neutral-200 pt-16 dark:border-neutral-800 md:grid-cols-[.75fr_1.25fr] md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
            The journey
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Learning by building.
          </h2>
        </div>

        <div className="relative space-y-10 border-l border-neutral-200 pl-7 dark:border-neutral-800">
          <div className="relative">
            <span className="absolute left-[-2.05rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-neutral-950" />

            <p className="font-mono text-xs text-neutral-400">
              01 / FOUNDATIONS
            </p>

            <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Started with computer science
            </h3>

            <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-300">
              My journey into development started with learning programming
              fundamentals and understanding how software and the web work.
              Pursuing my BCA has helped me build a stronger foundation while
              exploring development beyond the classroom.
            </p>
          </div>

          <div className="relative">
            <span className="absolute left-[-2.05rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-neutral-950" />

            <p className="font-mono text-xs text-neutral-400">
              02 / FRONTEND
            </p>

            <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Found my focus in frontend development
            </h3>

            <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-300">
              I gradually focused on JavaScript and React, learning to build
              responsive interfaces and interactive applications. Building
              projects such as my Appwrite Blog App and Currency Converter has
              helped me turn concepts into practical development experience.
            </p>
          </div>

          <div className="relative">
            <span className="absolute left-[-2.05rem] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-neutral-950" />

            <p className="font-mono text-xs text-neutral-400">
              03 / WHAT'S NEXT
            </p>

            <h3 className="mt-2 text-lg font-medium text-neutral-900 dark:text-neutral-100">
              Expanding toward full-stack development
            </h3>

            <p className="mt-2 leading-relaxed text-neutral-600 dark:text-neutral-300">
              I'm continuing to strengthen my frontend skills while learning
              backend development with Python and FastAPI. My long-term goal
              is to become a Full Stack Developer capable of building complete
              applications from frontend to backend.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-24 animate-slide-right grid gap-10 border-t border-neutral-200 pt-16 dark:border-neutral-800 md:grid-cols-[.75fr_1.25fr] md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
            Toolkit
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            What I work with.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            My current toolkit is centered around building responsive and
            maintainable frontend applications, while I continue expanding
            into backend development.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-2 pl-2 pr-4 text-sm text-neutral-600 transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <TechnologyIcon technology={skill} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mt-24 animate-fade-up grid gap-10 border-t border-neutral-200 pt-16 dark:border-neutral-800 md:grid-cols-[.75fr_1.25fr] md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-500">
            Education
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Building my foundation.
          </h2>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="font-mono text-xs text-blue-500">
                BCA HONS. · PRESENT
              </p>

              <h3 className="mt-3 text-xl font-medium text-neutral-900 dark:text-neutral-100">
                Bachelor of Computer Applications (BCA Hons.)
              </h3>

              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                CASET College of Computer Sciences, Srinagar, J&K, India
              </p>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                Currently pursuing my degree while developing practical skills
                in programming, frontend development, and software development
                through hands-on projects and continuous learning.
              </p>
            </div>

            <span className="whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
              Present
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;