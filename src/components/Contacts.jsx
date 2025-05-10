import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import style from "./styles/contacts.module.css";

export const Contacts = () => {
  return (
    <div className={style.main_container}>
      <img
        src="/assets/contacts/contact_text.png"
        className="pl-8 pt-[3.5rem]"
      />
      <div className={style.contact_container}>
        <div>
          <HiMail className={style.icon} />
          <span className="font-[1.2rem]">johnrico364@gmail.com</span>
        </div>
        <div>
          <HiPhone className={style.icon} />
          <span className="font-[1.2rem]">0930 949 3570</span>
        </div>
        <div>
          <HiLocationMarker className={style.icon} />
          <span className="font-[1.2rem]">Mandaue City, Cebu, Philippines</span>
        </div>
      </div>
    </div>
  );
};
