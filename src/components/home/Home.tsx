import { Element } from "react-scroll";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Element name="Home">
      <div className="flex justify-center w-full bg-gradient-to-b from-white to-zinc-400 min-h-screen" >
        <div className=" w-5/12 flex flex-col justify-center" >

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
            className="font-bold mb-2 left-100 bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-emerald-600 text-5xl" >
            Hola, Me llamo Anderson
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

        <div className="flex justify-center flex-wrap items-center" >
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