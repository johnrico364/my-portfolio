import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCodeBranch,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaServer,
  FaSun,
} from "react-icons/fa";

const profile = {
  name: "Alex Fullstack",
  role: "Fullstack Developer",
  shortIntro:
    "I build fast, scalable, and user-focused web applications from frontend experience to backend architecture.",
  about:
    "I am a fullstack developer focused on creating reliable products that solve real business problems. I enjoy turning ideas into polished applications, improving performance, and collaborating in agile teams.",
  email: "alex.fullstack.dev@example.com",
  location: "Metro Manila, Philippines",
  resumeLink: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: FaLinkedin },
  ],
};

const projects = [
  {
    title: "E-Commerce Admin Dashboard",
    description:
      "A full dashboard for product, order, and user management with role-based access and analytics widgets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://example.com/admin-dashboard",
    repoLink: "https://github.com/your-username/ecommerce-dashboard",
  },
  {
    title: "TaskFlow Collaboration App",
    description:
      "A collaborative task management app with boards, due dates, file uploads, and real-time updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Firebase", "Tailwind", "DaisyUI"],
    liveLink: "https://example.com/taskflow",
    repoLink: "https://github.com/your-username/taskflow",
  },
  {
    title: "DevHire Job Platform",
    description:
      "A job portal where companies post roles and developers apply, with filtering, saved jobs, and profile pages.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "PostgreSQL", "Prisma"],
    liveLink: "https://example.com/devhire",
    repoLink: "https://github.com/your-username/devhire",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    items: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "DaisyUI"],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "SQL/NoSQL"],
  },
  {
    title: "Tools",
    icon: FaGithub,
    items: ["Git & GitHub", "Vite", "Postman", "Figma", "CI/CD Basics"],
  },
];

const highlights = [
  "Built and deployed multiple end-to-end web apps from prototype to production.",
  "Improved page performance and reduced load time through optimized rendering.",
  "Collaborated with designers and backend teams using Agile workflows.",
];

const learningNow = ["System design fundamentals", "Testing strategies", "Cloud deployment best practices"];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="portfolio-shell relative min-h-screen overflow-hidden text-base-content">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-12 top-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-80 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <header className="navbar sticky top-0 z-20 border-b border-base-300/70 bg-base-100/80 px-4 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <a href="#home" className="text-lg font-black tracking-wide">
            {profile.name}
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
            <label className="swap swap-rotate btn btn-circle btn-outline btn-sm" aria-label="Toggle theme">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                aria-label="Toggle light and dark mode"
              />
              <FaSun className="swap-on h-4 w-4" />
              <FaMoon className="swap-off h-4 w-4" />
            </label>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10">
        <section id="home" className="rounded-box border border-base-300/70 bg-base-100 p-6 shadow-xl md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="badge badge-primary badge-outline mb-4 gap-2 px-3 py-3">
                <FaCodeBranch />
                Open to opportunities
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{profile.name}</h1>
              <p className="mt-3 text-xl font-semibold text-primary">{profile.role}</p>
              <p className="mt-4 max-w-2xl text-base-content/80">{profile.shortIntro}</p>
              <p className="mt-4 max-w-2xl text-base-content/70">{profile.about}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                  <FaArrowRight />
                </a>
                <a href={profile.resumeLink} className="btn btn-outline">
                  <FaDownload />
                  Download CV
                </a>
              </div>
              <p className="mt-4 text-sm text-base-content/70">{profile.location}</p>
            </div>

            <div className="order-1 mx-auto w-full max-w-sm md:order-2">
              <div className="card hero-photo overflow-hidden border border-base-300 bg-base-200 shadow-2xl">
                <figure className="p-4 pb-0">
                  <img
                    src="/assets/me_img.png"
                    alt={`${profile.name} portrait`}
                    className="h-[360px] w-full rounded-xl object-cover object-top"
                  />
                </figure>
                <div className="card-body pt-4">
                  <h2 className="card-title">{profile.name}</h2>
                  <p className="text-sm text-base-content/70">{profile.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-3xl font-bold">Skills & Tech Stack</h2>
            <div className="hidden h-[2px] flex-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent md:block" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="card border border-base-300/70 bg-base-100 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">
                      <Icon />
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="badge badge-outline badge-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <div className="hidden h-[2px] flex-1 rounded-full bg-gradient-to-r from-primary/50 to-transparent md:block" />
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="grid items-center gap-6 border-b border-base-300/60 pb-8 last:border-b-0 md:grid-cols-2"
              >
                <figure className={`relative h-64 overflow-hidden rounded-2xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                </figure>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-base-content/80">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`badge badge-outline ${theme === "dark" ? "border-white text-white" : "badge-neutral"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a className="btn btn-outline btn-sm" href={project.repoLink} target="_blank" rel="noreferrer">
                      <FaGithub />
                      Code
                    </a>
                    <a className="btn btn-primary btn-sm" href={project.liveLink} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="card border border-base-300/70 bg-base-100 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Experience Highlights</h2>
              <ul className="list-disc space-y-2 pl-5">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
          <article className="card border border-base-300/70 bg-base-100 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Currently Learning</h2>
              <div className="flex flex-wrap gap-2">
                {learningNow.map((topic) => (
                  <span key={topic} className="badge badge-secondary badge-outline">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className="card border border-primary/20 bg-primary text-primary-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Let us build something together</h2>
            <p>Open to freelance opportunities, full-time roles, and collaboration on impactful products.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-neutral">
                <FaEnvelope />
                Email Me
              </a>
              {profile.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
                  >
                    <Icon />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

export default App;
