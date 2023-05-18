import React from 'react';
import {AiOutlineFileDone, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
       <nav className="bg-black/30 w-max py-1.5 px-7 z-[2] fixed left-[50%] translate-x-[-50%] bottom-[1rem] flex gap-3 rounded-[3rem] backdrop-blur-[15px]">
           <Link className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" to="/"><AiOutlineHome/></Link>
           <a className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" href="#about"><AiOutlineUser/></a>
           <a className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" href="#experience"><BiBook/></a>
           <a className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" href="#works"><AiOutlineFileDone/></a>
           <Link className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" to="/contact"><BiMessageSquareDetail/></Link>
       </nav>
    );
};

export default Nav;
