import React, { useRef, useState } from 'react'
import AboutPage from './AboutPage'
import Hover from './partials/Hover'
import gsap from 'gsap'

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
      <div ref={menu} className="menu w-[33vw] top-0 -left-1/2 z-[999] fixed h-full pl-5 flex flex-col gap-5 bg-gradient-to-t from-white  backdrop-blur-[5px] pt-32 text-white">
        <Hover size={'5vw'} lead={'5vw'} str={'ABOUT'} />
        <Hover size={'5vw'} lead={'5vw'} str={'SKILL'} />
        <Hover size={'5vw'} lead={'5vw'} str={'PROJECTS'} />
        <Hover size={'5vw'} lead={'5vw'} str={'CONTACT'} />
      </div>
      <div className='h-full w-[7vw] pointer-events-none fixed left-0 z-[999] shrink-0 pt-6 px-5 '>
        <div onClick={toggleMenu} className="menu w-full  relativ pointer-events-auto aspect-square cursor-pointer group flex flex-col items-center justify-center gap-1.5">
          <div className="line origin-center group-hover:rotate-45 group-hover:translate-y-1 transition-transform w-10 h-0.5 bg-[#6866B5]"></div>
          <div className="line w-10 origin-center group-hover:-rotate-45 group-hover:-translate-y-1 transition-transform h-0.5  bg-[#6866B5]"></div>
        </div>
      </div>
    </>
  )
}

export default Nav