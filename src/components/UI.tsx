import Title from "./Title";
import UiCards from "./UiCards";
import {Cyprus,idate,status,Appex} from "../assets";
import { FadeIn } from "./FadeIn";

const UI = () => {
  return (
    <section
      id="Ui"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title=""
            des="My UI/UX Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
         <a href="https://www.figma.com/file/9Cf78CfRmNDUFwaAdnE064/apex-tv?type=design&node-id=0-1&mode=design&t=0vT0n3Qdv1Vsh777-0"><UiCards
            title="UI"
            des=""
            src={Appex}
          /></a>
          
          <a href="https://www.figma.com/file/6QNCYVyJ7AUVecNckNW899/idate-app?type=design&node-id=0-1&mode=design&t=FMezUqknMl63q8tj-0"> <UiCards
            title="UI"
            des=""
            src={idate}
          /></a>
          <a href="https://www.figma.com/file/4z9msM0EANj0qeVyRMW7St/Union-Group?type=design&node-id=765-1337&mode=design&t=WNgkENZxqVq4AyB1-0">
          <UiCards
            title="UI"
            des=""
            src={Cyprus}
          />
          </a>
           <a href="https://www.figma.com/file/3NIkJ36dBsK92vVb1k9u1V/status-shoes?type=design&node-id=0-1&mode=design&t=2Zp9juKu7D6FDkRz-0"><UiCards
            title="UI"
            des=""
            src={status}
          /></a>
         
         
        
        </div>
      </FadeIn>
    </section>
  );
};

export default UI;
