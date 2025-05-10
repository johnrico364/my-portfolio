import style from "./styles/home.module.css";

export const Home = () => {
  return (
    <div className={style.main_container}>
      <div className="basis-1/2">
        <img src="/assets/home/frontend_dev_text.png" />
        <div className="mt-[2rem] text-[1.1rem]">
          I am Ja Rico - <span className="text-[#0081F9]">web developer</span> a
          passionate about clean design and seamless user experiences.
        </div>
      </div>
      <div className={style.laptop_bg_container}></div>
    </div>
  );
};
