import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiPostgresql, SiTailwindcss} from 'react-icons/si';
import { Card } from "./Card";
 
const MainStack = ()=>{
    return(
        <motion.div className="flex flex-col w-96 justify-center" >
            <h2 className="text-2xl text-bold text-white">Conocimientos principales</h2>
            <div className="flex flex-wrap h-fit w-full ">
                <Card name="NodeJS" icon={<FaNodeJs color="#4d9646" />} />
                <Card name="React" icon={<FaReact className="animate-spin-slow" color="#49fffb" />} />
                
                <Card name="Express" icon={<SiExpress />} />
                <Card name="JavaScript" icon={<SiJavascript color="yellow" />} />
                <Card name="PostgreSQL" icon={<SiPostgresql color="blue" />} />
                <Card name="TailwindCSS" icon={<SiTailwindcss color="#38bdf8" />} />
            </div>
         

        </motion.div>

    );
}

export { MainStack};