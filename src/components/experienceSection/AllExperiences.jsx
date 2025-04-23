import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import React from "react";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Upwork",
    date: "Jul2023 - Mar2024",
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and React.",
      "Built reusable UI components to streamline development.",
      "Optimized web performance for faster loading.",
      "Implemented AI tools to speed up coding tasks.",
      "Contributed to large-scale projects with complex architecture.",
      "Improved UX based on user feedback and testing.",
    ],
  },
  {
    job: "Software Developer Intern",
    company: "BearIT Oy",
    date: "Mar2024 - Nov2024",
    responsibilities: [
      "Created components in Next.js.",
      "Implemented multi-page application functionality.",
      "Worked with hooks.",
      "Implemented application logic using TypeScript.",
      "Styled pages using Tailwind CSS according to Figma designs.",
      "Creating endpoints within a Next.js framework",
      "Integrated Front-End with Back-End and displayed data using tRPC.",
    ],
  },
  {
    job: "Software Developer",
    company: "Nidos Ltd.",
    date: "Aug2024 - Nov2024",
    responsibilities: [
      "Developed the frontend using React and Tanstack.",
      "Integrated REST APIs and tested with Postman.",
      "Focused on UI development and user experience optimization.",
      "Wrote Playwright tests to ensure system functionality.",
      "Implemented AI tools to speed up coding tasks.",
      "Collaborated closely with senior developers in an agile environment, providing active contribution and input."
    ],
  },
  {
    job: "Software Developer Volunteer",
    company: "Duoton AI",
    date: "Feb2025 - Present",
    responsibilities: [
      "Delivered responsive and accessible UI components using Tailwind CSS.",
      "Designed and optimized relational data models in Supabase with PostgreSQL to support scalable backend functionality.",
      "Developed API endpoints and integrated full-stack features within a Next.js framework.",
      "Implemented vector-based search capabilities to enhance data retrieval performance and user interaction.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col flex-wrap items-start gap-6">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );

      })}    </div>
  );
};

export default AllExperiences;
