import style from "./styles/projects.module.css";

export const Projects = () => {
  const projects = [
    {
      image: "food_hub.png",
      name: "FOOD HUB",
    },
    {
      image: "dev_tools.png",
      name: "DEV TOOLS",
    },
    {
      image: "airline_booking.png",
      name: "AIRLINE BOOKING",
    },
    {
      image: "e-commerce.png",
      name: "E-COMMERCE",
    },
    {
      image: "todo_list.png",
      name: "TODO LIST",
    },
  ];

  return (
    <div className={style.main_container}>
      <img
        src="/assets/projects/projects_text.png"
        className="pl-8 pt-[3.5rem]"
      />

      <div className="flex overflow-x-auto gap-6 px-8 mt-[7rem] pb-8">
        {projects.map((project) => {
          return (
            <div className={style.card_container}>
              <img
                src={`/assets/projects/${project.image}`}
                className={style.card_img}
              />
              <h3 className={style.card_name}>{project.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
