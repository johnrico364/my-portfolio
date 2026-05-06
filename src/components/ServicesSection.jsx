import { services } from "../data/portfolio";

function ServicesSection() {
  return (
    <section>
      <article className="card border border-base-300/70 bg-base-100 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold">Services I Offer</h2>
          <ul className="list-disc space-y-3 pl-6 text-lg leading-relaxed">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

export default ServicesSection;

