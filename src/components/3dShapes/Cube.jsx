import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Cube = ({ top, left, rotateX, rotateY, img, alt }) => {

    useGSAP(() => {
        gsap.to('.cube', { rotateX, rotateY })
    }, [rotateX, rotateY])

    return (
        <>
            <div style={{ top, left }} className={`cube md:absolute  origin-center flex items-center  cursor-pointer justify-center`}>
                <img src={img} className='h-20 transition-all duration-300' alt={alt} />
                <div className="bottom absolute md:h-40 h-32 aspect-square  "></div>
                <div className="top absolute md:h-40 h-32 aspect-square "></div>
                <div className="right absolute md:h-40 h-32 aspect-square "></div>
                <div className="back absolute md:h-40 h-32 aspect-square "></div>
                <div className="bottom absolute md:h-40 h-32 aspect-square "></div>
                <div className="md:h-40 h-32 aspect-square absolute shadow-[0px_0px_50px_10px_#6866B5] shadowcube"></div>
                <div className="left absolute md:h-40 h-32 aspect-square "></div>
            </div>
        </>
    )
}

export default Cube