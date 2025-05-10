import style from "./styles/skills.module.css";

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
      <div className="basis-1/2">
        <img
          src="/assets/skills/skills_text.png"
          className="pl-8 pt-[3.5rem]"
        />
        <div className="pl-8 pt-[3rem] text-[2rem] font-semibold">
          Technical Skills
        </div>

        <div className={style.technical_skills_container}>
          <img src="/assets/skills/reactjs_bar.png"  />
          <img src="/assets/skills/nodejs_bar.png"  />
          <img src="/assets/skills/laravel_bar.png"  />
          <img src="/assets/skills/flutter_bar.png"  />
          <img src="/assets/skills/tailwind_bar.png"  />
          <img src="/assets/skills/csharp_bar.png"  />
        </div>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
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
