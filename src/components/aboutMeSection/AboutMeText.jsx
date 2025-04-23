import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        <p>
          I’m Mykola, a Full Stack Software Developer with a passion for
          building modern applications. With a background in accounting and
          agronomy, I made a bold career switch to software development, driven
          by my love for problem-solving and technology.
          <br />
          <br /> I specialize in frontend development (Next.js, React,
          TypeScript, Tailwind CSS) and backend integration (Node.js, REST APIs,
          SQL/NoSQL databases), with a growing expertise in C# and .NET. My
          journey—from seasonal work in Finland to a career as a developer—has
          taught me resilience, adaptability, and the value of lifelong
          learning.
          <br />
          <br />
          Beyond coding, I’m a dedicated Family man, father of Little Princess,
          an outdoor enthusiast (fishing, hiking), chess lover, gym regular,
          rock music fan, and a nature photography geek. I’m a proud learner of
          Finnish language and culture. <br/>
          I believe in continuous growth, both
          professionally and personally, and I’m excited to contribute my skills
          and become part of a dynamic team.
        </p>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
