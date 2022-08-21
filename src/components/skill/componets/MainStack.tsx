import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { useModal } from "../../../context/useModal";
import { PropsSkill } from "../../../helpers/propChild";
import { Card } from "./Card";

const MainStack = ({setSkillId} : PropsSkill) => {
    const { openModal } = useModal();

    const handlePressSkill = (value: string) => {
        setSkillId(value);
        openModal!();
    } 

    return (
        <motion.div className="flex flex-col w-96 justify-center" >
            <h2 className="text-2xl font-bold text-white">Conocimientos principales</h2>
            <div className="flex flex-wrap h-fit w-full ">
                <Card skillId="node" onClick={handlePressSkill} name="NodeJS"><FaNodeJs color="#4d9646" /></Card>
                <Card skillId="node" onClick={handlePressSkill} name="React"><FaReact className="animate-spin-slow" color="#49fffb" /></Card>
                <Card skillId="express" onClick={handlePressSkill} name="Express"><SiExpress /></Card>
                <Card skillId="node" onClick={handlePressSkill} name="JavaScript"><SiJavascript color="yellow" /></Card>
                <Card skillId="node" onClick={handlePressSkill} name="PostgreSQL"><SiPostgresql color="blue" /></Card>
                <Card skillId="node" onClick={handlePressSkill} name="TailwindCSS"><SiTailwindcss color="#38bdf8" /></Card>
            </div>
        </motion.div>
 
    );
}
export { MainStack };
