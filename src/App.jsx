import { useRef } from "react";
import { Aboutme } from "./components/Aboutme";
import { Contacts } from "./components/Contacts";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { FaBars } from "react-icons/fa";

function App() {
  const homeRef = useRef(null);
  const aboutmeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar w-full sticky top-0 z-[40] custom-navbar-bg pr-[2rem]">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <FaBars className="text-[1.7rem]" />
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 text-[1.4rem] font-semibold">
              Ja Rico
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
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
          {/* Page content here */}
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
        <div className="drawer-side z-[50]">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#040035] text-white font-semibold text-[1.1rem] min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li
              onClick={() => {
                homeRef.current.scrollIntoView({ behavior: "smooth" });
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <span>HOME</span>
            </li>
            <li
              onClick={() => {
                aboutmeRef.current.scrollIntoView({ behavior: "smooth" });
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <span>ABOUT ME</span>
            </li>
            <li
              onClick={() => {
                servicesRef.current.scrollIntoView({ behavior: "smooth" });
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <span>SERVICES</span>
            </li>
            <li
              onClick={() => {
                projectsRef.current.scrollIntoView({ behavior: "smooth" });
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <span>MY PROJECT</span>
            </li>
            <li
              onClick={() => {
                skillsRef.current.scrollIntoView({ behavior: "smooth" });
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <span>SKILLS</span>
            </li>
            <li
              onClick={() => {
                contactsRef.current.scrollIntoView({ behavior: "smooth" });
                document.getElementById("my-drawer-3").checked = false;
              }}
            >
              <span>CONTACT</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
