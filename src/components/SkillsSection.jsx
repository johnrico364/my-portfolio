import SectionHeading from "./SectionHeading";

function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="space-y-5">
      <SectionHeading title="Skills & Tech Stack" />
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article
              key={group.title}
              className="card border border-base-300/70 bg-base-100 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
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
  );
}

export default SkillsSection;

