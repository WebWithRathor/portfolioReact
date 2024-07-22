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
            <div className="px-32 page shrink-0 flex relative z-0 bg-gradient-to-b from-[#EDE9C9] to-white">
                <InfiniteBar text={'About Me'} height={'60vh'} rotate={'6deg'} />
                <h1 className='text-9xl ml-32 font-medium pt-72 leading-[7rem] w-max shrink-0'>Hi !
                    <motion.div
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        drag dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                        style={{ x }} className='text-4xl inline-block tracking-wide ml-3'> I'm  FullStack Devloper</motion.div>
                </h1>
                <div className="box flex items-center absolute w-80 right-0 top-48 justify-center">
                    <img className='h-80 mix-blend-darken absolute shrink-0  animate-[spin_15s_linear_infinite]' src={video} alt="" />
                    <i className="fa-solid fa-code text-4xl"></i>
                </div>

                <p className='pointer-events-none pt-[60vh] w-[50vw] shrink-0 -ml-80 text-xl  tracking-wider leading-8 ' > A passionate Bachelor of Technology (BTech) student in Computer
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