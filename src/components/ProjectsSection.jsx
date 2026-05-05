import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

function ProjectsSection({ projects, theme }) {
  return (
    <section id="projects" className="space-y-5">
      <SectionHeading title="Featured Projects" />
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="grid items-center gap-6 border-b border-base-300/60 pb-8 last:border-b-0 md:grid-cols-2"
          >
            <figure
              className={`relative h-64 overflow-hidden rounded-2xl ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
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
                    className={`badge badge-outline ${
                      theme === "dark" ? "border-white text-white" : "badge-neutral"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn btn-outline btn-sm"
                  href={project.repoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  className="btn btn-primary btn-sm"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

