import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { l,  hiring,oka,okay,r,w} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
         <a href="#"><ProjectsCard
            title="Banner Design"
            des=""
            src={l}
          /></a>
          
          <a href="#"> <ProjectsCard
            title="Logo Design"
            des=""
            src={r}
          /></a>
         
           <a href="#"><ProjectsCard
            title="Logo Design"
            des=""
            src={oka}
          /></a>
          <a href="#">
          <ProjectsCard
            title="Logo Design"
            des=""
            src={okay}
          /></a>
         <a href="#">
          <ProjectsCard
            title="Flyer Design"
            des=" "
            src={hiring}
          /></a>
          <a href="#">
          <ProjectsCard
            title="Banner Design"
            des=""
            src={w}
          />
          </a>
        
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
