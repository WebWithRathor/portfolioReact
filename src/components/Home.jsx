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
    if(window.innerWidth > 700){
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
        translateX: "-20vw",
        ease: 'linear',
        duration: 5,
      })
      .from('.aboutpage .infinite', {
        scale:0.7,
        x:30,
        opacity:0,
        duration:5,
        ease: 'linear',
      },'about')
      .to('.page', {
        translateX: "-50vw",
        ease: 'linear',
        duration: 5,
      },'about')
      .from('.aboutpage>h1 , .aboutpage p', {
        y:50,
        opacity:0,
        duration:5
      },'aboutp')
      .to('.page', {
        translateX: "-120vw",
        ease: 'linear',
        duration: 10,
      },'aboutp')
      .to('.page', {
        translateX: "-150vw",
        ease: 'linear',
        duration: 10,
      },'aboutimg')
      .from('.aboutpage img, .aboutpage i', {
        scale:0,
        opacity:0,
        duration: 10,
      },'aboutimg')
      .to('.page', {
        translateX: "-183vw",
        ease: 'linear',
        duration: 5,
      },"edu")
      .from('.educationpage .infinite', {
        scale:.7,
        opacity:0,
        duration: 5,
      },"edu")
      .to('.page', {
        translateX: "-200vw",
        ease: 'linear',
        duration: 5,
      },"edu3")
      .from('.educationpage>.text-xl', {
        x:50,
        opacity:0,
        duration: 5,
      },"edu3")
      .to('.page', {
        translateX: "-233vw",
        ease: 'linear',
        duration: 10,
      })
      .to('.page', {
        translateX: "-263vw",
        ease: 'linear',
        duration: 5,
      },'sk')
      .from('.skillpage>h1',{
        opacity:0,
        scale:0,
        duration:5
      },'sk')   
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
      
      

      .from('.projectpage>.mt-10 h1', {
        scale:0,
        opacity:0,
        ease: 'linear',
        duration: 10,
      },'project')
      .to('.page', {
        translateX: "-330vw",
        ease: 'linear',
        duration: 10,
      },'project')
      .to('.page', {
        translateX: "-480vw",
        ease: 'linear',
        duration: 25,
      })
      .to('.page', {
        translateX: "-516vw",
        ease: 'linear',
        duration: 5,
      },'contact')
      .from('.contactpage h1,.contactpage .email',{
        y:40,
        opacity:0,
        ease: 'linear',
        duration: 3,
      },'contact')
    }

  }, [])




  return (
    <div ref={main} className="main scrollbar-none h-screen relative">
      
      <div  className='flex md:flex-row flex-col parent font-[ClashDisplay] md:h-screen  overflow-hidden items-center text-zinc-700 '>
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