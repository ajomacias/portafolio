import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../context/useModal";
import { AiFillCloseSquare } from 'react-icons/ai';

const Modal = ({ children, name }:PropsModal)=>{
    
    const { isOpen, closeModal } =  useModal();

    const handleClickOut = (event :  React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
        closeModal!();
    }

    const handleClickIntoModal = (event :  React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
        event.stopPropagation();

    }
  
    return(
        <AnimatePresence> 
        {isOpen && (
         
             <motion.div
             initial={{ 
                opacity : 0
             }} 
             animate={{
                opacity : 1
             }}
             exit={ 
                {
                    opacity : 0
                 }
             }
              onClick={handleClickOut}
              className="fixed top-0 left-0 flex z-50 justify-center min-h-screen bg-opacity-40 min-w-full items-center bg-black" >
             <div onClick={handleClickIntoModal} className="w-96 h-64 bg-white rounded">
                <div className="border-b rounded-t items-center bg-gradient-to-r h-8 to-violet-800 from-emerald-600 flex justify-between" >
                    <h1 className="text-white ml-1 font-semibold ">
                       {name}
                    </h1>
                    <button className="text-2xl text-red-500" onClick={()=>closeModal!()} ><AiFillCloseSquare /> </button>
                </div>
               <div className="w-full h-56 p-1" >
                {children}
                </div>
             </div>
         </motion.div>
        )}
        </AnimatePresence>
    );
}

type PropsModal = {
    children : React.ReactNode,
    name? : string
}

export { Modal };