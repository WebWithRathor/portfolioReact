import React from 'react'

const Homepage = () => {
    return (
        <div className="page shrink-0 p-10 z-0  relative h-full w-screen bg-gradient-to-b from-[#EDE9C9] to-white">
            <p className='ml-auto w-1/2 font-[ClashDisplay] text-lg tracking-wider text-right'>As a second-year B.Tech student specializing in MERN stack and proficient in C language, I excel in both front-end and back-end development. Passionate about coding, I create dynamic, responsive web applications and thrive in collaborative projects, continuously learning to deliver innovative and impactful solutions.</p>
            <div className="ml-auto w-max px-5 rounded-md text-[#fcfbec] font-medium text-xl mt-4 py-3 bg-[#6968B5]">Get Resume</div>
            <h1 className='absolute top-[96%]  -translate-y-full  text-[8vw] leading-none font-medium font-[ClashDisplay]'>DEVRAJ <span className='text-[#6968B5] font-[Melodrama] ml-3 font-semibold'>RATHOR</span></h1>
        </div>
    )
}

export default Homepage