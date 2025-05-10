import { useRef } from "react";
import { Aboutme } from "./components/Aboutme";
import { Contacts } from "./components/Contacts";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";

function App() {
  const homeRef = useRef(null);
  const aboutmeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div>
      <div className="navbar sticky top-0 z-50 custom-navbar-bg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" style={{ letterSpacing: "1px" }}>
            Ja Rico
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-8">
            <li
              onClick={() => {
                homeRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>HOME</span>
            </li>
            <li
              onClick={() => {
                aboutmeRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>ABOUT ME</span>
            </li>
            <li
              onClick={() => {
                servicesRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>SERVICES</span>
            </li>
            <li
              onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>MY PROJECT</span>
            </li>
            <li
              onClick={() => {
                skillsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>SKILLS</span>
            </li>
            <li
              onClick={() => {
                contactsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>CONTACT</span>
            </li>
          </ul>
        </div>
      </div>

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutmeRef}>
        <Aboutme />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactsRef}>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
