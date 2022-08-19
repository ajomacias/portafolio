import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {MainStack,SecundaySkills} from "./componets";

const Skill = ()=>{

    return(
        <Element className="w-full flex flex-wrap justify-center items-center min-h-screen bg-gradient-to-b from-zinc-400  to-zinc-700" name="Skills" >
            <motion.div
 
            className="flex flex-wrap justify-center items-center" >
                <MainStack />
                <SecundaySkills/>
                
            </motion.div>
        </Element>

    );

}

export { Skill };