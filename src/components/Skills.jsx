import style from "./styles/skills.module.css";

const skillsBar = [
  "reactjs_bar.png",
  "nodejs_bar.png",
  "laravel_bar.png",
  "flutter_bar.png",
  "tailwind_bar.png",
  "csharp_bar.png",
];

const subSkills = [
  "MONGO DB",
  "MYSQL",
  "CHART.JS",
  "POSTMAN",
  "GITHUB",
  "FIGMA",
  "FIREBASE",
  "GIT",
  "REDUX",
  "EXPRESS",
  "BOOTSTRAP",
  "DAISY UI",
  "JAVA",
  "C++",
  "PYTHON",
];

export const Skills = () => {
  return (
    <div className={style.main_container}>
      <div className="w-full lg:basis-1/2 px-4 lg:px-8">
        <img src="/assets/skills/skills_text.png" className="pt-[3.5rem]" />
        <div className="pt-[3rem] text-xl md:text-2xl lg:text-[2rem] font-semibold">
          Technical Skills
        </div>

        <div className={style.technical_skills_container}>
          {skillsBar.map((skill) => {
            return (
              <img
                src={`/assets/skills/${skill}`}
                className="w-7/12 lg:w-10/12"
                key={skill}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full lg:basis-1/2 flex justify-center items-center mt-8 lg:mt-0">
        <div className={style.sub_skills_container}>
          {subSkills.map((skill, index) => (
            <div key={index} className={style.sub_skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
