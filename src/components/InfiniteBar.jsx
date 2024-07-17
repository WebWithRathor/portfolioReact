import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useEffect } from 'react'

const InfiniteBar = () => {


    return (
        <div  className={`infinite scrollbar-none shrink-0 flex flex-col w-[10vw] mx-10 rotate-6  bg-[#7776bc] text-[#fffbdb] overflow-hidden justify-center items-center h-[110vh] `}>
            <motion.h1   animate={{transform:`translateY(200%) rotate(-90deg)`}} transition={{duration:5, repeat:Infinity, repeatType:'loop', ease:"linear"}}   className={`uppercase transition-transform ease-linear shrink-0 font-[Melodrama] text-8xl w-max h-[60vh] text-center justify-center -rotate-90 items-center flex flex-col px-7 `}>
                About Me
            </motion.h1>
            <motion.h1   animate={{transform:`translateY(200%) rotate(-90deg)`}} transition={{duration:5, repeat:Infinity, repeatType:'loop', ease:"linear"}}  className='uppercase transition-transform ease-linear shrink-0 font-[Melodrama] text-8xl w-max h-[60vh] text-center justify-center -rotate-90 items-center flex flex-col px-7'>
                About Me
            </motion.h1>
            <motion.h1   animate={{transform:`translateY(200%) rotate(-90deg)`}} transition={{duration:5, repeat:Infinity, repeatType:'loop', ease:"linear"}}  className='uppercase transition-transform ease-linear shrink-0 font-[Melodrama] text-8xl w-max h-[60vh] text-center justify-center -rotate-90 items-center flex flex-col px-7'>
                About Me
            </motion.h1>
            <motion.h1   animate={{transform:`translateY(200%) rotate(-90deg)`}} transition={{duration:5, repeat:Infinity, repeatType:'loop', ease:"linear"}}  className='uppercase transition-transform ease-linear shrink-0 font-[Melodrama] text-8xl w-max h-[60vh] text-center justify-center -rotate-90 items-center flex flex-col px-7'>
                About Me
            </motion.h1>
            <motion.h1   animate={{transform:`translateY(200%) rotate(-90deg)`}} transition={{duration:5, repeat:Infinity, repeatType:'loop', ease:"linear"}}  className='uppercase transition-transform ease-linear shrink-0 font-[Melodrama] text-8xl w-max h-[60vh] text-center justify-center -rotate-90 items-center flex flex-col px-7'>
                About Me
            </motion.h1>
            <motion.h1   animate={{y:"141.5%"}} style={{rotate:"-90deg"}} transition={{duration:2, ease:"linear" ,repeat:Infinity}}  className='uppercase transition-transform ease-linear shrink-0 font-[Melodrama] text-8xl w-max h-[60vh] text-center justify-center -rotate-90 items-center flex flex-col px-7'>
                About Me
            </motion.h1>
        </div>
    )
}

export default InfiniteBar