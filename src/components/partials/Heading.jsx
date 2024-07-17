import { motion, useMotionValue, useSpring } from 'framer-motion'
import React from 'react'

const Heading = ({ head,mt,mb }) => {
    console.log(mb,mt);
    const x = useMotionValue(0)
    useSpring(x, { stiffness: 1000, damping: 10 })
    return (
            <motion.h1 dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                drag dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                style={{ x }} className={`text-9xl w-max font-[Melodrama] font-medium mb-${mb} mr-24 text-[#6968B5] mt-${mt}`}>{head}</motion.h1>

    )
}

export default Heading