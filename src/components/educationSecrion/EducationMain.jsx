import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Link } from "react-scroll"; 

const EducationMain = () => {
  return (
    <motion.section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 mx-auto relative"
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="max-w-[1200px] w-full py-20">
        <h2 className="text-6xl text-cyan mb-10">Education</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-8 mb-10">
            I started school in 1996 and haven&#39;t stopped learning since. 
          </p>
          
          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-20"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-128} 
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange mx-auto hover:text-cyan transition-colors duration-300"
              >
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationMain;