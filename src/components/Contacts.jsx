import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import style from "./styles/contacts.module.css";

export const Contacts = () => {
  return (
    <div className={style.main_container}>
      <img
        src="/assets/contacts/contact_text.png"
        className="w-64 px-4 lg:px-8 pt-[3.5rem]"
      />
      <div className={style.contact_container}>
        <div className={style.contact_item}>
          <HiMail className={style.icon} />
          <span className="text-base md:text-lg lg:text-xl">
            johnrico364@gmail.com
          </span>
        </div>
        <div className={style.contact_item}>
          <HiPhone className={style.icon} />
          <span className="text-base md:text-lg lg:text-xl">0930 949 3570</span>
        </div>
        <div className={style.contact_item}>
          <HiLocationMarker className={style.icon} />
          <span className="text-base md:text-lg lg:text-xl">
            Mandaue City, Cebu, Philippines
          </span>
        </div>
      </div>
    </div>
  );
};
