import { Element } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { MainStack, SecundaySkills, SkillModal } from "./componets";
import { Modal } from "../Modal";
import { useRef, useState } from "react";
import { skills } from "../../helpers/aboutSkills";

const Skill = () => {
  const [skillId, setSkillId] = useState<string>('');

  const ref = useRef(null);
  const isInView = useInView(ref);
  const selectedSkill = skillId.length == 0 ? null : skills.find((skill) => skill.skillId == skillId);  
  return (
    
    <Element name="Conocimientos">
      <motion.div
      initial="offView"
      whileInView="onView"
      className="
      w-full
      flex
      justify-center
      items-center 
      min-h-screen 
      bg-gradient-to-b 
      from-zinc-400  
      to-zinc-700"
      >
        <section  ref={ref}>
        <motion.div
          className="flex gap flex-wrap justify-center items-center" 
          >
          <MainStack setSkillId={setSkillId} />
          <SecundaySkills setSkillId={setSkillId} />
        </motion.div>
        <Modal name={selectedSkill?.name} >
          {selectedSkill && (  
           <SkillModal skill={selectedSkill} />
          )
          }  
        </Modal>
        </section> 
      </motion.div>
      
      <motion.div
      style={
        { 
          opacity : isInView ?1 : 0 ,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }
      }
      
      className="h-16 w-56 flex items-center rounded leading-4 p-2 fixed z-30 right-2 bottom-2 shadow-md bg-white "
      >
        <p className="text-center text-gray-600 text-xs" >Presiona en los iconos para ver lo que e hecho con ellas :)</p>
    
      </motion.div>
       
    </Element>
   
  );

}

export { Skill };