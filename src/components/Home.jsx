import React, { useEffect, useRef } from 'react'
import Homepage from './Homepage'
import Nav from './Nav'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'
import AboutPage from './AboutPage'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion, useScroll } from 'framer-motion'
import ContactUs from './ContactUs'

const Home = () => {

  const main = useRef(null)
  


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to('.page', {
      translateX: "-400vw",
      ease: 'linear',
      duration: 30,
      scrollTrigger:{
        scroller:"body",
        trigger: ".main",
        start: "top 0%",
        end: "top -200%",
        pin:true,
        scrub:2
      }
    })

  }, [])
  return (
    <div ref={main} className="main scrollbar-none h-screen relative">
      <div className='flex parent font-[ClashDisplay] h-screen  overflow-hidden items-center text-zinc-700 '>
        <Nav />
        <Homepage />
        <AboutPage/>
        <SkillsPage />
        <ProjectPage />
        <ContactUs/>
      </div>
    </div>
  )
}

export default Home