import React, { useEffect, useRef, useState } from 'react'
import Homepage from './Homepage'
import Nav from './Nav'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'
import AboutPage from './AboutPage'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { easeIn, motion, useScroll } from 'framer-motion'
import ContactUs from './ContactUs'
import Education from './Education'

const Home = () => {

  const main = useRef(null)
  

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger:{
        scroller:"body",
        trigger: ".main",
        start: "top 0%",
        end: "top -200%",
        pin:true,
        scrub:2
      }
    })
    .to('.page', {
      translateX: "-263vw",
      ease: 'linear',
      duration: 30,
    })
    .to('.cube-container',{
      top:'-250%',
      ease:  "linear",
      duration:30,
    },"skill")   
    .from('.skillpage span',{
      opacity:0,
      stagger:.2,
      duration:25,
      ease:  "linear",
    },"skill")   
    .to('.page', {
      translateX: "-516vw",
      ease: 'linear',
      duration: 30,
    })

  }, [])

  const [moveX, setmoveX] = useState(0)
  const [moveY, setmoveY] = useState(0)


  return (
    <div ref={main} className="main scrollbar-none h-screen relative">
      
      <div onMouseMove={(e)=>{setmoveX(e.clientX);setmoveY(e.clientY)}}  className='flex parent font-[ClashDisplay] h-screen  overflow-hidden items-center text-zinc-700 '>
        <motion.div style={{top:moveY,left:moveX}} className="curs pointer-events-none -translate-x-1/2 -translate-y-1/2 absolute z-[999] h-4 aspect-square bg-[#6866b5] rounded-full"></motion.div>
        <Nav />
        <Homepage  />
        <AboutPage />
        <Education />
        <SkillsPage  />
        <ProjectPage  />
        <ContactUs />
      </div>
    </div>
  )
}

export default Home