import { LuDownload } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="/src/assets/CV-Mykola-Software-Developer.pdf"
      download="CV-Mykola-Software-Developer.pdf"
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Download CV
      <div className="sm:hidden md:block">
        <LuDownload />
      </div>
    </a>
  );
};

export default NavbarBtn;