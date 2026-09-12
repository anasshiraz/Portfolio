import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { MoonIcon, SunIcon } from "./Icons";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-neutral-200/80 bg-white/90 px-3 py-2 shadow-sm shadow-neutral-200/40 backdrop-blur-xl transition-colors dark:border-neutral-800/80 dark:bg-neutral-950/85 dark:shadow-black/10 sm:px-4">
        {/* Logo / Name */}
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center rounded-xl px-2 py-1 transition hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <img
            src={logo}
            alt="Anas Shiraz Logo"
            className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-105 sm:h-10"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 rounded-xl bg-neutral-100/80 p-1 md:flex dark:bg-neutral-900/80">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative rounded-lg px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-white font-medium text-neutral-900 shadow-sm dark:bg-neutral-800 dark:text-neutral-100"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          onClick={onToggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-400 dark:hover:bg-blue-950/40 dark:hover:text-blue-400 dark:focus-visible:ring-blue-500"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-neutral-900 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-neutral-100"
        >
          <span className="relative block h-4 w-5">
            {/* Top Line */}
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />

            {/* Middle Line */}
            <span
              className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom Line */}
            <span
              className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-lg shadow-neutral-200/30 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95 dark:shadow-black/20">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-blue-50 font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                      : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
