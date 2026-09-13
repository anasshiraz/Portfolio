import { GithubIcon, LinkedinIcon } from "./Icons";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white transition-colors dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 text-sm text-neutral-500 md:flex-row">
        
        {/* Copyright */}
        <div className="flex items-center gap-3">
          <span className="logo-glow inline-flex">
            <img
              src={logo}
              alt="Anas Shiraz Logo"
              className="relative z-0 h-8 w-auto object-contain opacity-80"
            />
          </span>
          <p>
            © {new Date().getFullYear()} Anas Shiraz. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/anasshiraz"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/anas-shiraz-8025822b8"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>

          <p className="text-neutral-400 dark:text-neutral-500">
            Built with React
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
