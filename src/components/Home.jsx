import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import style from "./styles/home.module.css";

export const Home = () => {
  return (
    <div className={style.main_container}>
      <div className="basis-10/12 lg:basis-1/2 ml-3">
        <img src="/assets/home/frontend_dev_text.png" />
        <div className="mt-[2rem] text-[1.1rem]">
          I am Ja Rico - <span className="text-[#0081F9]">web developer</span> a
          passionate about clean design and seamless user experiences.
        </div>
        <div>
          <a
            href="https://github.com/johnrico364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={style.icons} />
          </a>
          <a
            href="https://www.linkedin.com/in/john-anthony-rico-259930330/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.icons} />
          </a>
          <a
            href="https://www.facebook.com/anthony.rickson.16"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={style.icons} />
          </a>
        </div>
      </div>
      <div className={style.laptop_bg_container}></div>
    </div>
  );
};
