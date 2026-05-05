import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-base-300/70 bg-base-100/80 py-6 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm md:flex-row">
        <p>
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#home" className="link link-hover">
            Home
          </a>
          <a href="#projects" className="link link-hover">
            Projects
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

