import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import scrolleables from "../helpers/scrolleables";
import { ReactNode } from 'react';

const Header: React.FunctionComponent<Props> = ({ children }) => {





  return (
    <>
      <nav>
        <div 
        className={`flex text-white bg-black bg-opacity-50  transition-all  justify-between min-w-full items-center p-3 shadow-sm fixed`}>

          <Link
            className="cursor-pointer bg-clip-text hidden  md:block text-inherit text-rubik text-bold"
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
              className="text-sm cursor-pointer hover:text-violet-700 flex flex-col  items-center  "
              to={scrollable.name}
              spy={true}
              smooth={true}
              duration={450}
            >
              <scrollable.icon className="block md:hidden" size={20} />
              {scrollable.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="max-w-[1200px] min-w-full flex flex-col flex-wrap ">

        {children}
      </div>
    </>
  );



};

type Props = {
  children: ReactNode;
};

export { Header };
