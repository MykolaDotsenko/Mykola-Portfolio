import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
