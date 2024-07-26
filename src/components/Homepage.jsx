import React, { useEffect, useRef, useState } from 'react'
import Hover from './partials/Hover';
import resume from '../assets/Devraj Resume.pdf'
import { motion } from 'framer-motion';

const Homepage = () => {

    const page = useRef(null);
    const [rotate, setrotate] = useState(0)

    const eyes = (e)=>{
        const set = Math.atan2( e.clientY - window.innerHeight/2 ,e.clientX - window.innerWidth/2 ) * (180/Math.PI);
        setrotate(set)
    }
 



    return (
        <div onMouseMove={(e)=>eyes(e)} className="page homepage shrink-0 p-10 z-0  relative h-full w-screen bg-gradient-to-b from-[#EDE9C9] to-white">
            <p className='ml-auto w-1/2 font-[ClashDisplay] text-lg tracking-wider text-right'>As a second-year B.Tech student specializing in MERN stack and proficient in C language, I excel in both front-end and back-end development. Passionate about coding, I create dynamic, responsive web applications and thrive in collaborative projects, continuously learning to deliver innovative and impactful solutions.</p>
            <h1><a href={resume} download='DevrajResume.pdf' className="ml-auto block w-max px-5 rounded-md text-[#fcfbec] font-medium text-xl mt-4 py-3 hover:bg-transparent hover:border-[#6968B5] border border-transparent transition-all hover:text-[#6866B5] bg-[#6968B5]">Get Resume</a></h1>
            <h1 className='absolute top-[96%]  -translate-y-full flex items-center text-[8vw] leading-none font-medium font-[ClashDisplay]'>DEVRAJ
            <div className="circles flex gap-3 ml-5">
                <div className="circle h-32 w-32 border-2 shrink-0 rounded-full relative flex items-center justify-center bg-white"> <motion.div style={{rotate}} className="after:w-2/3  after:rounded-full after:absolute after:right-0 w-full  h-20 after:aspect-square absolute after:bg-black"> <motion.div className="after:w-1/3 after:z-20   after:rounded-full after:absolute after:right-0 w-full h-full py-2  after:aspect-square absolute after:bg-white after:border" ></motion.div> </motion.div></div>
                <div className="circle h-32 w-32 border-2 shrink-0 rounded-full relative flex items-center justify-center bg-white"> <motion.div style={{rotate}} className="after:w-2/3  after:rounded-full after:absolute after:right-0 w-full  h-20 after:aspect-square absolute after:bg-black"> <motion.div className="after:w-1/3 after:z-20  after:rounded-full after:absolute after:right-0 w-full  h-full py-2 after:aspect-square absolute  after:bg-white after:border" ></motion.div> </motion.div></div>
            </div>
            <Hover size={'8vw'} lead={'10vw'} str={'RATHOR'}/>
            </h1>
        </div>
    )
}

export default Homepage