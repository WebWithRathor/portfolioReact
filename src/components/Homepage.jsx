import React, { useEffect, useRef, useState } from 'react'
import Hover from './partials/Hover';
import resume from '../assets/Devraj Resume.pdf'
import { motion } from 'framer-motion';

const Homepage = () => {

    const page = useRef(null);
    const [rotate, setrotate] = useState(0)

    const eyes = (e) => {
        const set = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2) * (180 / Math.PI);
        setrotate(set)
    }




    return (
        <div id='Home' onMouseMove={(e) => eyes(e)} className="page homepage shrink-0 p-10 z-0 flex md:flex-col flex-col-reverse  relative h-full w-screen bg-gradient-to-l md:bg-gradient-to-b from-[#EDE9C9] to-white">
            <div className="">
                <p className='ml-auto md:w-1/2 font-[ClashDisplay] text-lg tracking-wider text-right'>As a second-year B.Tech student specializing in MERN stack and proficient in C language, I excel in both front-end and back-end development. Passionate about coding, I create dynamic, responsive web applications and thrive in collaborative projects, continuously learning to deliver innovative and impactful solutions.</p>
                <h1><a href={resume} download='DevrajResume.pdf' className="ml-auto block w-max px-5 rounded-md text-[#fcfbec] font-medium text-xl mt-4 py-3 hover:bg-transparent hover:border-[#6968B5] border border-transparent transition-all hover:text-[#6866B5] bg-[#6968B5]">Get Resume</a></h1>
            </div>
            <h1 className='md:absolute top-[96%]  md:-translate-y-full flex md:flex-row flex-col md:items-center md:mt-0 mt-5 mb-10 md:mb-0 text-5xl md:text-[8vw] leading-none font-medium font-[ClashDisplay]'>DEVRAJ
                <span className='ml-24 md:hidden'>RATHOR</span>
                <div className="circles hidden md:flex gap-3 ml-5">
                    <div className="circle h-32 w-32 border-2 shrink-0 rounded-full relative flex items-center justify-center bg-white"> <motion.div style={{ rotate }} className="after:w-2/3  after:rounded-full after:absolute after:right-0 w-full  h-20 after:aspect-square absolute after:bg-black"> <motion.div className="after:w-1/3 after:z-20   after:rounded-full after:absolute after:right-0 w-full h-full py-2  after:aspect-square absolute after:bg-white after:border" ></motion.div> </motion.div></div>
                    <div className="circle h-32 w-32 border-2 shrink-0 rounded-full relative flex items-center justify-center bg-white"> <motion.div style={{ rotate }} className="after:w-2/3  after:rounded-full after:absolute after:right-0 w-full  h-20 after:aspect-square absolute after:bg-black"> <motion.div className="after:w-1/3 after:z-20  after:rounded-full after:absolute after:right-0 w-full  h-full py-2 after:aspect-square absolute  after:bg-white after:border" ></motion.div> </motion.div></div>
                </div>
                <Hover size={'8vw'} lead={'10vw'} str={'RATHOR'} />
            </h1>
        </div>
    )
}

export default Homepage