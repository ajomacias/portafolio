import { motion } from "framer-motion";

const Card = ({ name, children, onClick, skillId }: Props)=>{
  return(
    <motion.div
    onClick={()=>{
      console.log(skillId)
      onClick(skillId);
    }}

    whileHover={
      {
        scale : 1.07     
      }
  }
     className="h-20 cursor-pointer justify-center bg-white rounded bg-opacity-10 w-20 shadow flex m-2">
    <figure>
        <p className="text-white text-sm">{name}</p>
        <div className="text-5xl flex justify-center " >
        {children}
        </div>

    </figure>
    </motion.div>

  );
}

export { Card }

type Props = {
  name : string,
  children : JSX.Element,
  skillId : string
  
  onClick : (value : string) => void
};