import React from "react";
import { Link } from "react-scroll";
import scrolleables from "../helpers/scrolleables";
import { ReactNode } from 'react';
const Header: React.FunctionComponent<Props> = ({ children }) => {


  return (
    <>
      <nav>
        <div className="flex flex-wrap z-20 bg-gradient-to-r to-violet-800 from-emerald-600 justify-between min-w-full items-center p-3 shadow-sm fixed">

            <Link
              className="cursor-pointer bg-clip-text text-inherit text-rubik text-bold"
              to="Home"
              spy={true}
              smooth={true}
              duration={250}
            >
              Anderk222
            </Link>
 
          {scrolleables.map((scrollable, index) => (
            <Link
              activeClass="border-b-2 border-b-emerald-500"
              key={index}
              className="text-sm text-white cursor-pointer hover:text-violet-700 "
              to={scrollable}
              spy={true}
              smooth={true}
              duration={450}
            > 
              {scrollable}
            </Link>
          ))} 
        </div>
      </nav>
      <div className="max-w-[1200px] min-w-full flex flex-col flex-wrap ">
        <div className="relative p-4 min-w-full h-fit top-12 bg-gray-500 text-white text-center" >
          <h2>Esta en desarrollo aun :)</h2>
        </div>
        {children}
      </div>
    </>
  );


};

type Props = {
  children: ReactNode;
};

export { Header };
