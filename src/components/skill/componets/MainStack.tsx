import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";

const MainStack = ()=>{
    return(
        <motion.div className="flex flex-col justify-center" >
            <h2>Conocimientos principales</h2>
            <div className="flex w-full justify-center ">
                <div>
                <figure>
                    <p>NodeJS</p>
                    <FaNodeJs />

                </figure>
                </div>
                <div>
                <figure>
                    <p>NodeJS</p>
                    <FaNodeJs />

                </figure>
                </div>
                <div>
                <figure>
                    <p>NodeJS</p>
                    <FaNodeJs />

                </figure>
                </div>
            </div>
         

        </motion.div>

    );
}

export { MainStack};