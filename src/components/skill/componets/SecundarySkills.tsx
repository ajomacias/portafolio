import { motion } from "framer-motion";
import { IoIosRocket } from 'react-icons/io';
import { SiMysql, SiFlutter, SiDart, SiJava, SiSpringboot, SiRust, SiPhp } from 'react-icons/si';
import { PropsSkill } from "../../../helpers/propChild";
import { Card } from "./Card";
import { useModal } from "../../../context/useModal";

const SecundaySkills = ({ setSkillId }: PropsSkill) => {

    const { openModal } = useModal();

    const handlePressSkill = (value: string) => {
        setSkillId(value);
        openModal!();
    }

    return (
        <motion.div
            className="flex flex-col w-96 h-fit " >
            <h2 className="text-2xl font-bold text-white " >Conocimientos secundarios</h2>
            <div className="flex flex-wrap  h-fit ">
                <Card skillId='flutter' onClick={handlePressSkill} name="Flutter"  >
                    <SiFlutter color="#4d9646" />
                </Card>
                <Card onClick={handlePressSkill} name="Dart" skillId='dart'>
                    <SiDart color="#49fffb" />
                </Card>
                <Card onClick={handlePressSkill} name="MySQL" skillId='mysql' >
                    <SiMysql color="blue" />
                </Card>
                <Card onClick={handlePressSkill} name="Java" skillId='java'  >
                    <SiJava />
                </Card>
                <Card onClick={handlePressSkill} name="SpringBoot" skillId='springboot' >
                    <SiSpringboot color="yellow" />
                </Card>
                <Card onClick={handlePressSkill} name="Rust" skillId='rust' >
                    <SiRust />
                </Card>

                <Card onClick={handlePressSkill} name="Rocket.rs" skillId='rocket' >
                    <IoIosRocket color="yellow" />
                </Card>
                <Card onClick={handlePressSkill} name="PHP" skillId='php'>
                    <SiPhp color="blue" />
                </Card>
            </div>
        </motion.div>
    );
}

export { SecundaySkills };