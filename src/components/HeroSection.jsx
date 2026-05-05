import { FaCodeBranch, FaArrowRight, FaDownload } from "react-icons/fa";

function HeroSection({ profile }) {
  return (
    <section
      id="home"
      className="rounded-box border border-base-300/70 bg-base-100 p-6 shadow-xl md:p-10"
    >
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
  );
}

export default HeroSection;

