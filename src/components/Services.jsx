import style from "./styles/services.module.css";

export const Services = () => {
  const services = [
    {
      image: "card_1.png",
      title: "Web Development",
      description:
        "Creating responsive and modern websites with the latest technologies and best practices.",
    },
    {
      image: "card_2.png",
      title: "UI/UX Design",
      description:
        "Crafting beautiful and intuitive user interfaces that enhance user engagement.",
    },
    {
      image: "card_3.png",
      title: "Mobile Apps",
      description:
        "Developing cross-platform mobile applications that deliver exceptional user experiences.",
    },
  ];

  return (
    <div className={style.main_container}>
      <img
        src="/assets/services/header_text.png"
        className="pl-8 pt-[3.5rem]"
      />
      <div className="flex justify-between mt-[7rem] px-8 gap-8">
        {services.map((service) => {
          return (
            <div className={style.card_container}>
              <img
                src={`/assets/services/${service.image}`}
                alt="Service 1"
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-center text-gray-200">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
