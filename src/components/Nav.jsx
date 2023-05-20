import React from 'react';
import {AiOutlineFileDone, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {Link} from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Nav = () => {
    return (
       <nav className="bg-black/30 w-max py-1.5 px-7 z-[2] fixed left-[50%] translate-x-[-50%] bottom-[1rem] flex gap-3 rounded-[3rem] backdrop-blur-[15px]">
           <Link className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" to="/"><AiOutlineHome/></Link>
           <LinkScroll
               className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms] cursor-pointer"
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
           >
               <AiOutlineUser/>
           </LinkScroll>
           <LinkScroll
               className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms] cursor-pointer"
               activeClass="active"
               to="experience"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
           >
               <BiBook/>
           </LinkScroll>
           <LinkScroll
               className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms] cursor-pointer"
               activeClass="active"
               to="works"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
           >
               <AiOutlineFileDone/>
           </LinkScroll>
           <Link className="bg-transparent p-3.5 rounded-[50%] flex text-white text-[1.1rem] duration-[300ms] hover:bg-black/40 hover:duration-[300ms]" to="/contact"><BiMessageSquareDetail/></Link>
       </nav>
    );
};

export default Nav;
