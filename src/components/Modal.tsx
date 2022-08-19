import { motion } from "framer-motion";
import { useModal } from "../context/useModal";
import { Props } from "../helpers/propChild";

const Modal = ({ children }:Props)=>{
    
    const { isOpen, closeModal } =  useModal();
 
    return(
        <>
        {isOpen && (
             <div className="fixed flex flex-nowrap z-20 justify-center bg-opacity-40 min-h-screen min-w-full items-center bg-black" >
             <motion.div className="w-96 h-96 bg-white"
             initial={{
                scale : 0
             }}
             animate={{
                scale : 1
             }}
             >
                <div className="border-b flex justify-end" >
                    <button onClick={()=>closeModal!()} >X</button>
                </div>
                {children}
             </motion.div>
         </div>
        )  
        }
        </>
    );

}

export { Modal };