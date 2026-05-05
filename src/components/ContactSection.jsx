import { FaEnvelope } from "react-icons/fa";
import { profile } from "../data/portfolio";

function ContactSection() {
  return (
    <section
      id="contact"
      className="card border border-primary/20 bg-primary text-primary-content shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title text-2xl">Let us build something together</h2>
        <p>
          Open to freelance opportunities, full-time roles, and collaboration on impactful
          products.
        </p>
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
  );
}

export default ContactSection;

