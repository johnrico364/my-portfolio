import style from "./styles/projects.module.css";

export const Projects = () => {
  const projects = [
    {
      image: "food_hub.png",
      name: "FOOD HUB",
      description:
        "This system is a global recipe explorer that showcases traditional and popular dishes from countries around the world, offering users an immersive culinary journey across cultures.",
      technologies: "Next JS, Laravel, Blade, MySql",
      link: "https://github.com/johnrico364/food-hub.git",
    },
    {
      image: "dev_tools.png",
      name: "DEV TOOLS (Client)",
      description: "Collection of essential developer tools and utilities",
      technologies: "React JS",
      link: "https://github.com/johnrico364/dev-tools-client.git",
    },
    {
      image: "airline_booking.png",
      name: "AIRLINE BOOKING",
      description: "Online flight booking and reservation system",
      technologies: "React JS, Node JS, Express JS, MongoDB",
      link: "https://github.com/johnrico364/ticket-system.git",
    },
    {
      image: "e-commerce.png",
      name: "E-COMMERCE",
      description:
        "This e-commerce platform features distinct client and admin interfaces, providing customers with a seamless shopping experience and empowering administrators with comprehensive management tools.",
      technologies: "React JS, Node JS, Express JS, MongoDB",
      link: "https://github.com/johnrico364/milky-way-store.git",
    },
    {
      image: "car-rental.png",
      name: "CAR RENTAL",
      description:
        "This car rental app offers a user-friendly client side for seamless vehicle booking and a robust admin side for efficient fleet management and reservation oversight.",
      technologies: "React JS, Node JS, Express JS, MongoDB",
      link: "https://github.com/johnrico364/car-rental.git",
    },
    {
      image: "todo_list.png",
      name: "TODO LIST",
      description:
        "Smart task management application with basic interface and features",
      technologies: "React JS, Node JS, Express JS, MongoDB",
      link: "https://github.com/johnrico364/todo-strapi.git",
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
