import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";

function projectGallery(project) {
  return project.images?.length > 0 ? project.images : [project.image];
}

function scrollToSlide(slideId) {
  const slide = document.getElementById(slideId);
  if (!slide) return;

  slide.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
}

function ProjectsSection({ projects, theme }) {
  return (
    <section id="projects" className="space-y-5">
      <SectionHeading title="Featured Projects" />
      <div className="space-y-8">
        {projects.map((project, index) => {
          const gallery = projectGallery(project);
          const baseId = `project-${index}`;
          const n = gallery.length;

          return (
            <article
              key={project.title}
              className="grid items-center gap-6 border-b border-base-300/60 pb-8 last:border-b-0 md:grid-cols-2"
            >
              <figure
                className={`relative h-64 overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                {n === 1 ? (
                  <img
                    src={gallery[0]}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="carousel carousel-horizontal h-full w-full">
                    {gallery.map((src, i) => {
                      const prev = (i - 1 + n) % n;
                      const next = (i + 1) % n;
                      const slideId = `${baseId}-slide-${i}`;
                      const alt = `${project.title} preview (${i + 1} of ${n})`;

                      return (
                        <div
                          id={slideId}
                          key={slideId}
                          className="carousel-item relative h-full w-full"
                        >
                          <img
                            src={src}
                            alt={alt}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading={i === 0 ? "eager" : "lazy"}
                          />
                          <div className="absolute top-1/2 left-5 right-5 z-10 flex -translate-y-1/2 justify-between">
                            <button
                              type="button"
                              className="btn btn-circle btn-neutral/80 text-neutral-content border-0"
                              aria-label="Previous image"
                              onClick={() => scrollToSlide(`${baseId}-slide-${prev}`)}
                            >
                              <FaChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-circle btn-neutral/80 text-neutral-content border-0"
                              aria-label="Next image"
                              onClick={() => scrollToSlide(`${baseId}-slide-${next}`)}
                            >
                              <FaChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-20 bg-gradient-to-t from-black/55 to-transparent" />
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
                  {project.liveDisabled ? (
                    <span
                      className="btn btn-primary btn-sm btn-disabled cursor-not-allowed"
                      aria-disabled="true"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </span>
                  ) : (
                    <a
                      className="btn btn-primary btn-sm"
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
