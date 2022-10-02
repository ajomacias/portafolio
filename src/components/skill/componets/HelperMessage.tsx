import { motion } from "framer-motion";

function HelperMessage({ isInView }:HelperMessageProps) {
    return <motion.div
      style={{
        zIndex : isInView ? 4 : -1,
        opacity : isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
  
      className="h-16 w-56 items-center rounded leading-4 p-2 z-30 fixed right-2 bottom-2 shadow-md bg-white "
    >
      <p className="text-center text-gray-600 text-xs">Presiona en los iconos para ver lo que e hecho con ellas :)</p>
  
    </motion.div>;
}

type HelperMessageProps = {
  isInView : boolean
}

export { HelperMessage };