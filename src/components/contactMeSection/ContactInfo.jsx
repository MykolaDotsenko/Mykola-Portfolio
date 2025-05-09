import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-2">
      <SingleInfo text="docnikolaj1990@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+358 46 622 49 59" Image={FiPhone} />
      <SingleInfo text="Turku, Finland" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
