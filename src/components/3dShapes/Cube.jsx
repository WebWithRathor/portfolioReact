import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Cube = ({ top, left, rotateX, rotateY, img, alt }) => {

    useGSAP(() => {
        gsap.to('.cube', { rotate: gsap.utils.random(-5, 5, 1), rotateX, rotateY })
    }, [rotateX, rotateY])

    return (
        <>
            <div style={{ top, left }} className={`cube absolute  origin-center flex items-center  cursor-pointer justify-center`}>
                <img src={img} className='h-20 transition-all duration-300' alt={alt} />
                <div className="bottom absolute h-40 aspect-square  "></div>
                <div className="top absolute h-40 aspect-square "></div>
                <div className="right absolute h-40 aspect-square "></div>
                <div className="back absolute h-40 aspect-square "></div>
                <div className="bottom absolute h-40 aspect-square "></div>
                <div className="h-40 w-40 absolute shadow-[0px_0px_50px_10px_#6866B5] shadowcube"></div>
                <div className="left absolute h-40 aspect-square "></div>
            </div>
        </>
    )
}

export default Cube