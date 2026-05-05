import { FaSun, FaMoon } from "react-icons/fa";

function Header({ name, theme, onToggleTheme }) {
  return (
    <header className="navbar sticky top-0 z-20 border-b border-base-300/70 bg-base-100/80 px-4 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <a href="#home" className="text-lg font-black tracking-wide">
          {name}
        </a>
        <div className="flex items-center gap-2">
          <a href="#projects" className="btn btn-ghost hidden md:inline-flex">
            Projects
          </a>
          <a href="#skills" className="btn btn-ghost hidden md:inline-flex">
            Skills
          </a>
          <a href="#contact" className="btn btn-ghost hidden md:inline-flex">
            Contact
          </a>
          <label
            className="swap swap-rotate btn btn-circle btn-outline btn-sm"
            aria-label="Toggle theme"
          >
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={onToggleTheme}
              aria-label="Toggle light and dark mode"
            />
            <FaSun className="swap-on h-4 w-4" />
            <FaMoon className="swap-off h-4 w-4" />
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;

