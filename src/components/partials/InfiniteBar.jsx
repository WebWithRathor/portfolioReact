import { motion } from 'framer-motion'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const InfiniteBar = ({ text, height, dir, rotate }) => {

    const [currentScroll, setCurrentScroll] = useState(window.scrollY);
    const [scrollDirection, setScrollDirection] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            const newScroll = window.scrollY;
            const newDirection = newScroll < currentScroll ? 'up' : 'down';
            if (newDirection !== scrollDirection) {
                setScrollDirection(newDirection);
            }
            setCurrentScroll(newScroll);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentScroll, scrollDirection]);



    return (
        <div style={{ rotate: `${rotate}` }} className={`infinite scrollbar-none shrink-0 flex flex-col w-[10vw] mx-10   bg-[#7776bc] text-[#fffbdb] overflow-hidden justify-center items-center h-[110vh] `}>
            <motion.h1 style={{ height: `${height}` }} initial={{rotate:'-90deg'}} animate={{ translateY: `${scrollDirection === 'up' ? '-100%' : '100%'}` }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className={`uppercase transition-transform ease-linear pointer-events-none shrink-0 font-[Melodrama] text-8xl w-max text-center justify-center rotate-[-90deg] items-center flex flex-col px-7 `}>
                {text}
            </motion.h1>
            <motion.h1 style={{ height: `${height}` }} initial={{rotate:'-90deg'}} animate={{ translateY: `${scrollDirection === 'up' ? '-100%' : '100%'}` }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className={`uppercase transition-transform ease-linear pointer-events-none shrink-0 font-[Melodrama] text-8xl w-max text-center justify-center rotate-[-90deg] items-center flex flex-col px-7`}>
                {text}
            </motion.h1>
            <motion.h1 style={{ height: `${height}` }} initial={{rotate:'-90deg'}} animate={{ translateY: `${scrollDirection === 'up' ? '-100%' : '100%'}` }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className={`uppercase transition-transform ease-linear pointer-events-none shrink-0 font-[Melodrama] text-8xl w-max text-center justify-center rotate-[-90deg] items-center flex flex-col px-7`}>
                {text}
            </motion.h1>
            <motion.h1 style={{ height: `${height}` }} initial={{rotate:'-90deg'}} animate={{ translateY: `${scrollDirection === 'up' ? '-100%' : '100%'}` }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className={`uppercase transition-transform ease-linear pointer-events-none shrink-0 font-[Melodrama] text-8xl w-max text-center justify-center rotate-[-90deg] items-center flex flex-col px-7`}>
                {text}
            </motion.h1>
            <motion.h1 style={{ height: `${height}` }} initial={{rotate:'-90deg'}} animate={{ translateY: `${scrollDirection === 'up' ? '-100%' : '100%'}` }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className={`uppercase transition-transform ease-linear pointer-events-none shrink-0 font-[Melodrama] text-8xl w-max text-center justify-center rotate-[-90deg] items-center flex flex-col px-7`}>
                {text}
            </motion.h1>

        </div>
    )
}

export default InfiniteBar