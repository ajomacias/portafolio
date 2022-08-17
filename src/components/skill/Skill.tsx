import { Element } from "react-scroll";
import { motion } from "framer-motion";
import {MainStack} from "./componets/MainStack";


const Skill = ()=>{
    return(
        <Element className="w-full min-h-screen bg-gradient-to-b pt-10 from-zinc-400  to-zinc-700" name="Skills" >
            <div className="flex flex-col" >
                <MainStack />
                
            </div>

 
        </Element>

    );

}

export { Skill };