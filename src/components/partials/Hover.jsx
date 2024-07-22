import { motion } from 'framer-motion'
import React from 'react'

const Hover = ({ str }) => {
    return (
        <motion.div
            className='text-[#6968B5] overflow-hidden text-[8vw] mb-3 font-[Melodrama] ml-6 font-semibold inline-block relative h-max leading-[10vw]'
            initial="initials"
            whileHover="hovered"
            transition={{staggerChildren:'.1'}}
        >
            <div>

            {str.split('').map((e,i) => <motion.span key={i} className='inline-block ' transition={{delay: 0.05 * i}} variants={
                { initials: { y: 0 }, hovered: { y: "-100%"} }
            } >{e}</motion.span>)}

            </div>
            <div className='absolute inset-0'>

            {str.split('').map((e,i) => <motion.span key={i} className='inline-block ' transition={{delay: 0.05 * i}} variants={
                { initials: { y: "100%" }, hovered: { y: '0%'} }
            } >{e}</motion.span>)}

            </div>


        </motion.div>
    )
}

export default Hover