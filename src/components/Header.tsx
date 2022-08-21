import React from "react";
import { Link } from "react-scroll";
import scrolleables from "../helpers/scrolleables";
import { useState, ReactNode, useEffect } from 'react';
const Header: React.FunctionComponent<Props> = ({ children }) => {

  
  return (
    <div>
      <nav className=''>
        <div className="flex flex-wrap z-20 bg-gradient-to-r to-violet-800 from-emerald-600 justify-between w-full items-center p-3 shadow-sm fixed">
          <div className="inline-block w-3/12">
            <Link
              className="cursor-pointer bg-clip-text text-inherit text-rubik text-bold"
              to="Home"
              spy={true}
              smooth={true}
              duration={250}
            >
              Anderk222
            </Link>
          </div>
          {scrolleables.map((scrollable, index) => (
            <Link
              activeClass="border-b-2 border-b-emerald-500  "
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

      <div className="flex w-full justify-center">
        <div className="w-[1200px] ">{children}</div>
      </div>
    </div>
  );

 
};

type Props = {
  children: ReactNode;
};

export { Header };
