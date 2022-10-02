import { Element } from "react-scroll";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Element className="flex bg-gradient-to-b justify-center items-center from-white to-zinc-400 min-h-screen" name="Home">
      <div className="flex flex-wrap  justify-center items-center gap-2 p-2" >
        <div className=" flex flex-col h-fit flex-wrap" >

          <motion.h2
            initial={{
              x: -100,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{ duration: 0.9 }}
            className="font-bold mb-2 left-100 text-5xl" >
            Hola,
            <br />
            
             Me llamo Anderson
          </motion.h2>

          <motion.p
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 1

            }}
            className="text-xs h-16 w-96 opacity-0 text-gray-700 leading-4" >Soy desarrollador, me enacanta aprender  cosas nuevas *Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est porro aut odio amet dolorem ullam suscipit voluptates, nisi autem iusto
            commodi culpa voluptatibus perspiciatis,  totam illo ratione unde deserunt? </motion.p>
        </div>

        <div className="flex justify-center" >
          <figure className="w-full">
            <motion.div
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 1,
                delay: 1
              }}
              className="bg-[url('assets/profile.jpg')] opacity-0 cursor-pointer rounded-full w-60 bg-cover h-60" >

            </motion.div>

          </figure>
        </div>

      </div>
    </Element>
  );

}

export { Home };