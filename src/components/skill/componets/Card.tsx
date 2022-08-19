import { motion } from "framer-motion";

const Card = ({ name, icon, }: Props)=>{
  return(
    <motion.div

    whileHover={
      {
        scale : 1.07    
      }
  }
     className="h-20 cursor-pointer justify-center bg-white rounded bg-opacity-10 w-20 shadow flex m-2">
    <figure>
        <p className="text-white text-sm">{name}</p>
        <div className="text-5xl flex justify-center " >
        {icon}
        </div>

    </figure>
    </motion.div>

  );
}

export { Card }

type Props = {
  name : string,
  icon : JSX.Element
};