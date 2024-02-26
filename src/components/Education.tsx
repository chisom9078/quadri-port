import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-sky-500 tracking-[4px]"> 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Higher National Diploman in ComputerScience"
            subTitle="Kwara State Polytechnic,Kwara State  (2023)"
            result="2:1"
            des=""
          />
          {/*<ResumeCard
            title="MSC in Computer Science "
            subTitle="Wayne State Uiversity (2024 - present)"
            result=""
            des=""
  />*/}
         {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
  />*/}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm  text-sky-500 tracking-[4px]">2020-2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Junior UX/UI Designer|Product Design"
            subTitle="Maven Crest Solutions Limited  - (2020)"
            result="United Kingdom"
            des="Ensure project objectives align with business expectations, collaborating with the research team for user persona alignment. Coordinate with design team members, modify designs based on customer preferences, and present ideas to cross-functional teams, senior leadership, and engineers, while gathering user requirements and illustrating design ideas."
          />
          <ResumeCard
            title="Junior UX/UI Designer"
            subTitle="MMTech Limited - (2018–2020)"
            result="Nigeria"
            des="Developed a mortgage calculator software using Java in the NetBeans environment and SQLITE,  enabling accurate sales calculations.
          	Created a mortgage calculator web application using HTML5, CSS3, and JavaScript (MERN stack), providing an intuitive user interface and efficient mortgage calculations.
            Built a  frontend marketable website for ordering pizza, including a form, image gallery, and comment section, using React and Bootstrap frameworks.
            "
          />
       {/*   <ResumeCard
            title="Software developer"
            subTitle="Manifold Computers - (2023 - 2024)"
            result="Nigeria"
            des="Build page navigation buttons and search fields. Develop UI mockups and prototypes, create original graphic designs, present drafts, identify UX problems, conduct layout adjustments, and adhere to style standards.
            "
/>*/}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
