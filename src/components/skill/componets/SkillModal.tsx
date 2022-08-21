import { AboutSkill } from "../../../helpers/propChild";
import { ListItemsModal } from "./ListItemsModal";

const SkillModal = ({skill}: SkillProps)=>{
    return(
        <div className="h-56 text-gray-600" >
        <h2 className="text-center h-8 font-semibold text-xl border-b" >Practicas con esta tecnologia</h2>
        <div className="text-xs h-48 mr-0 pb-4" >
          < ListItemsModal practices={skill.experience} />
        </div>
      </div>
    );
   
}

type SkillProps = {
    skill : AboutSkill
}

export { SkillModal };