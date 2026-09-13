export function GithubIcon({ className = "h-5 w-5" }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/></svg>
}

export function LinkedinIcon({ className = "h-5 w-5" }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.25 7.06 2.03 2.03 0 0 0 5.25 3ZM20.44 13.41c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.86V8.5H9.4V20h3.38v-5.7c0-1.5.28-2.96 2.15-2.96 1.84 0 1.87 1.72 1.87 3.06V20h3.38l.26-6.59Z"/></svg>
}

export function ArrowUpRightIcon({ className = "h-4 w-4" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>
}

export function DownloadIcon({ className = "h-4 w-4" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>
}

export function SunIcon({ className = "h-5 w-5" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></svg>
}

export function MoonIcon({ className = "h-5 w-5" }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 15.3A8.5 8.5 0 0 1 8.7 3.5 8.5 8.5 0 1 0 20.5 15.3Z"/></svg>
}

const TECHNOLOGY_STYLES = {
  HTML5: { label: "5", className: "bg-orange-500 text-white" },
  CSS3: { label: "3", className: "bg-blue-500 text-white" },
  JavaScript: { label: "JS", className: "bg-yellow-300 text-neutral-950" },
  React: { label: "⚛", className: "bg-cyan-500 text-white" },
  "Tailwind CSS": { label: "≋", className: "bg-sky-500 text-white" },
  Python: { label: "Py", className: "bg-blue-600 text-yellow-300" },
  "Git & GitHub": { label: "◆", className: "bg-neutral-900 text-white dark:bg-neutral-700" },
}

export function TechnologyIcon({ technology }) {
  const style = TECHNOLOGY_STYLES[technology] ?? {
    label: technology.slice(0, 2).toUpperCase(),
    className: "bg-blue-500 text-white",
  }

  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold shadow-sm ${style.className}`}
    >
      {style.label}
    </span>
  )
}
