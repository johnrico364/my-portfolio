import style from "./styles/aboutme.module.css";

export const Aboutme = () => {
  return (
    <div className={style.main_container}>
      <div className="basis-1/2 flex justify-center">
        <img src="/assets/aboutme/me_img.png" className="h-[30rem] mt-[8rem]" />
      </div>
      <div className="basis-1/2 flex flex-col items-center">
        <img
          src="/assets/aboutme/aboutme_text.png"
          className="h-[2.5rem] mt-[8rem]"
        />
        <div className="mt-4 px-8 text-justify">
          <p className="mt-4">
            Hello! I'm <span className="text-[#0081F9]">Ja</span>, a Frontend
            Web Developer with a passion for crafting engaging and intuitive
            user experiences. I thrive on bringing designs to life with clean,
            efficient code, and I'm always eager to explore the latest
            technologies shaping the web.
          </p>
          <p className="mt-4">
            What truly excites me in the development process is not just the
            visual layer, but also understanding the engine beneath – how data
            flows, is structured, and ultimately informs the user interface. I
            find immense satisfaction in connecting the dots between backend
            logic and frontend presentation, ensuring that the data not only
            displays correctly but also enhances the user's interaction and
            understanding. My interest in how data works fuels my approach to
            building dynamic and responsive interfaces that are not only
            visually appealing but also intelligently driven by the information
            they present.
          </p>
          <p className="mt-4">
            I'm constantly seeking opportunities to leverage my frontend skills
            to build impactful web applications, and I'm particularly drawn to
            projects where I can combine my love for creating seamless user
            experiences with my fascination for the power and potential of data.
          </p>
        </div>
      </div>
    </div>
  );
};
