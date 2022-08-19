import { motion } from "framer-motion";
import { IoIosRocket } from 'react-icons/io';
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMysql,SiFlutter, SiDart, SiJava, SiSpringboot, SiRust, SiPhp} from 'react-icons/si';
import { Card } from "./Card";

const SecundaySkills = ()=>{

    return(
        <motion.div
        className="flex flex-col w-96 h-fit " >
            <h2 className="text-2xl text-bold" >Conocimientos secundarios</h2>
            <div className="flex flex-wrap h-fit ">
                <Card name="Flutter" icon={<SiFlutter color="#4d9646" />} />
                <Card name="Dart" icon={<SiDart color="#49fffb" />} />
                <Card name="MySQL" icon={<SiMysql color="blue" />} />
                <Card name="Java" icon={<SiJava />} />
                <Card name="SpringBoot" icon={<SiSpringboot color="yellow" />} />
                <Card name="Rust" icon={<SiRust />} />
                
                <Card name="Rocket.rs" icon={<IoIosRocket color="yellow" />} />
                <Card name="Rocket.rs" icon={<SiPhp color="yellow" />} />
            </div>
         

        </motion.div>

    );
}

export { SecundaySkills};