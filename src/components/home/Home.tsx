import { Element } from "react-scroll";

const Home = ()=>{

    return(
      <Element name="Home"> 
      <div className="flex justify-center w-full bg-gradient-to-b from-white to-zinc-300 min-h-screen" >
        <div className=" w-5/12 flex flex-col justify-center" >
   
            <h2 className="font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-emerald-600 text-5xl" >
                Hola, Me llamo Anderson 
            </h2>
   
            <p className="text-xs h-16 w-96 text-gray-700 leading-4" >Soy desarrollador, me enacanta aprender  cosas nuevas *Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est porro aut odio amet dolorem ullam suscipit voluptates, nisi autem iusto
               commodi culpa voluptatibus perspiciatis,  totam illo ratione unde deserunt? </p>
               </div>
  
        <div className="flex justify-center flex-wrap items-center" >
        <figure className="w-full">
        <div className="bg-[url('assets/profile.jpg')] hover:scale-95 transition cursor-pointer delay-100 rounded-full w-60 bg-cover h-60" ></div>
          
        </figure>
        </div>
        
      </div>
      </Element>
    );

}

export { Home };