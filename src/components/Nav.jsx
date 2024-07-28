import React, { useRef, useState } from 'react'
import AboutPage from './AboutPage'
import Hover from './partials/Hover'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Nav = () => {

  const menu = useRef(null)
  const [flag, setflag] = useState(0)
  const toggleMenu = () => {
    if (flag === 0) {
      gsap.to(menu.current, {
        left: '0%'
      });
      setflag(1);
    } else {
      gsap.to(menu.current, {
        left: '-50%'
      });
      setflag(0);
    }
  }

  return (
    <>
      <div ref={menu} className="menu w-[33vw]  top-0 -left-1/2 z-[999] fixed h-full pl-5 flex flex-col gap-5 bg-black/[.7]  backdrop-blur-[5px] pt-32 text-white">
        <Link to={'/'}><Hover size={'5vw'} lead={'5vw'} str={'HOME'}  /></Link>
        <Link to={'/skill'}><Hover size={'5vw'} lead={'5vw'} str={'SKILL'}  /></Link>
        <Link to={'/projects'}><Hover size={'5vw'} lead={'5vw'} str={'PROJECTS'}  /></Link>
        <Link to={'/contact'}><Hover size={'5vw'} lead={'5vw'} str={'CONTACT'}  /></Link>
      </div>
      <div className='h-full w-[7vw] pointer-events-none fixed left-0 z-[999] top-0 shrink-0 pt-6 px-5 '>
        <div onClick={toggleMenu} className="menu w-full  relativ pointer-events-auto aspect-square cursor-pointer group flex flex-col items-center justify-center gap-1.5">
          <div className="line origin-center group-hover:rotate-45 group-hover:translate-y-1 transition-transform w-10 h-0.5 bg-[#9d9cc9]"></div>
          <div className="line w-10 origin-center group-hover:-rotate-45 group-hover:-translate-y-1 transition-transform h-0.5  bg-[#9d9cc9]"></div>
        </div>
      </div>
    </>
  )
}

export default Nav