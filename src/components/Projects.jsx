import style from "./styles/projects.module.css";

export const Projects = () => {
  const projects = [
    {
      image: "food_hub.png",
      name: "FOOD HUB",
      description:
        "This system is a global recipe explorer that showcases traditional and popular dishes from countries around the world, offering users an immersive culinary journey across cultures.",
      technologies: "Next JS, Laravel, Blade, MySql",
      link: "https://foodhub.example.com",
    },
    {
      image: "dev_tools.png",
      name: "DEV TOOLS (Client)",
      description: "Collection of essential developer tools and utilities",
      technologies: "React JS",
      link: "https://devtools.example.com",
    },
    {
      image: "airline_booking.png",
      name: "AIRLINE BOOKING",
      description: "Online flight booking and reservation system",
      technologies: "React, Node.js, PostgreSQL",
      link: "https://airbooking.example.com",
    },
    {
      image: "e-commerce.png",
      name: "E-COMMERCE",
      description: "Full-featured e-commerce platform with payment integration",
      technologies: "React, Express.js, MongoDB",
      link: "https://ecommerce.example.com",
    },
    {
      image: "todo_list.png",
      name: "TODO LIST",
      description: "Smart task management application with reminders",
      technologies: "React, LocalStorage, TailwindCSS",
      link: "https://todoapp.example.com",
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
            <div className={style.card_container} key={project.name}>
              <img
                src={`/assets/projects/${project.image}`}
                className={style.card_img}
              />
              <div className={style.card_overlay}>
                <h3 className={style.card_name}>{project.name}</h3>
                <p className={style.card_description}>{project.description}</p>
                <p className={style.card_tech}>{project.technologies}</p>
                <a
                  href={project.link}
                  className={style.card_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
