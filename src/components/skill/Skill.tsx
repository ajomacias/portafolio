import { Element } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { MainStack, SecundaySkills, SkillModal } from "./componets";
import { Modal } from "../Modal";
import { useRef, useState } from "react";
import { skills } from "../../helpers/aboutSkills";
import { HelperMessage } from "./componets/HelperMessage";

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
          className="flex gap items-start justify-center flex-wrap  " 
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
        <HelperMessage isInView={isInView} />
        </section> 
      </motion.div>
      
      
    </Element>
   
  );

}

export { Skill };