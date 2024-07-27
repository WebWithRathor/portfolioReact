import React from 'react'
import InfiniteBar from './partials/InfiniteBar'
import video from '../assets/Devraj rathor portfolio.png'
import gsap from 'gsap'
import { motion, useMotionValue, useSpring } from "framer-motion"

const AboutPage = ({ X }) => {

    const x = useMotionValue(0)
    const spring = useSpring(x)
    useSpring(x, { stiffness: 1000, damping: 10 })


    return (
        <>
            <div className="md:px-32 page aboutpage shrink-0 flex md:flex-row flex-col relative z-0 overflow-hidden bg-gradient-to-l md:bg-gradient-to-b from-[#EDE9C9] to-white">
                <InfiniteBar text={'About Me'} height={'60vh'} rotate={'6deg'} />
                <h1 className=' text-7xl py-10 ml-10 md:text-9xl md:ml-32 font-medium md:pt-72 md:leading-[7rem] md:flex gap-14 w-max shrink-0'>Hi !<div className="scale-75 -ml-12 md:scale-100 md:ml-0x`">
                        <motion.div
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            drag dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                            style={{ x }} className='text-4xl inline-block tracking-wide ml-0 md:ml-3'> I'm  FullStack Devloper</motion.div>
                    </div>
                </h1>
                <div className="box flex items-center absolute w-40 md:w-80 right-0 top-16 md:top-48 justify-center">
                    <img className='md:h-80 mix-blend-darken absolute shrink-0  animate-[spin_15s_linear_infinite]' src={video} alt="" />
                    <i className="fa-solid fa-code md:text-4xl"></i>
                </div>

                <p className='pointer-events-none md:text-left text-center md:pt-[60vh] px-10 md:px-0 md:w-[50vw] shrink-0 md:-ml-80 text-xl  tracking-wider leading-8 ' > A passionate Bachelor of Technology (BTech) student in Computer
                    Science and Engineering (CSE) and full-stack MERN web developer,
                    proficient in Next.js and Figma. Skilled in creating dynamic and
                    responsive applications using modern web technologies. Continuously
                    improving skills in Figma for enhanced design capabilities. Eager to
                    innovate and excel in the tech industry.</p>
            </div>
        </>
    )
}

export default AboutPage