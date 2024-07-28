import { motion } from 'framer-motion'
import React from 'react'

const Hover = ({ str,size,lead }) => {
    return (
        <motion.div
        style={{fontSize : size , lineHeight : lead}}
            className='text-[#9d9cc9] overflow-hidden  mb-3 font-[Melodrama] ml-6 font-semibold hidden md:inline-block relative h-max'
            initial="initials"
            whileHover="hovered"
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