import React, { useEffect, useRef, useState } from 'react'
import Heading from './partials/Heading'
import Cube from './3dShapes/Cube'
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

const SkillsPage = () => {
    const page = useRef(null);
    const {pathname} = useLocation()
    const personalRoute = pathname.split('/')[1] != '';
    const [rotateX, setRotateX] = useState(-10)
    const [rotateY, setRotateY] = useState(-10)
    const threeRotate = function (e, elem) {
        setRotateY(Math.floor(((page.current.clientWidth / 2 - e.clientX) / 30)))
        setRotateX(Math.floor((-(page.current.clientHeight / 2 - e.clientY) / 30)))
    }


    return (
        <div id='Skill' ref={page} onMouseMove={e => threeRotate(e)} className="page skillpage font-[clashDisplay] min-h-screen   relative py-12 px-5 md:px-20 shrink-0 flex flex-col w-screen items-center justify-center h-full ">
            {personalRoute ? <Nav/> : ''}
            <Heading head={'Skills'} mt={'auto'} />
            <p className=' w-full flex flex-wrap justify-center md:w-[70%] text-center text-xl leading-8 '><span  className='mx-2'>Infinite Scroll</span><span>|</span><span className='mx-2'>Nodemailer</span><span>|</span><span className='mx-2'>Razorpay</span><span>|</span><span className='mx-2'>Framer Motion</span><span>|</span><span className='mx-2'>GSAP</span><span>|</span><span className='mx-2'>ScrollTrigger</span><span>|</span><span className='mx-2'>Locomotive.js</span><span>|</span><span className='mx-2'>Context API</span><span>|</span><span className='mx-2'>API Integration</span><span>|</span><span className='mx-2'>AJAX</span><span>|</span><span className='mx-2'>Mobile-first Design principle</span><span>|</span><span className='mx-2'>Intermediate debugging</span><span>|</span><span className='mx-2'>Effective communication</span><span>|</span><span className='mx-2'>Teamwork</span><span>|</span><span className='mx-2'>Quick learner</span><span>|</span><span className='mx-2'>Adaptable to new technologies</span><span>|</span><span className='mx-2'>Swiper JS</span><span>|</span><span className='mx-2'>react-router-dom</span><span>|</span><span className='mx-2'>Textilate Js</span><span>|</span><span className='mx-2'>EJS</span></p>
            <div className="w-full md:inline-block my-32 md:mt-0 flex justify-center px-5 flex-wrap gap-24 gap-y-28 cube-container min-h-screen md:h-screen top-full md:absolute">
                <Cube top={'12%'} rotateX={rotateX} alt={'nodejs logo'} img={'https://skillicons.dev/icons?i=nodejs'} rotateY={rotateY} left={"10%"} />
                <Cube top={'43%'} rotateX={rotateX} alt={'express logo'} img={'https://skillicons.dev/icons?i=express'} rotateY={rotateY} left={"25%"} />
                <Cube top={'75%'} rotateX={rotateX} alt={'postman logo'} img={'https://cdn.simpleicons.org/postman/FF6C37'} rotateY={rotateY} left={"10%"} />
                <Cube top={'13%'} rotateX={rotateX} alt={'mongodb logo'} img={'https://skillicons.dev/icons?i=mongodb'} rotateY={rotateY} left={"45%"} />
                <Cube top={'30%'} rotateX={rotateX} alt={'html5 logo'} img={'https://skillicons.dev/icons?i=html'} rotateY={rotateY} left={"82%"} />
                <Cube top={'70%'} rotateX={rotateX} alt={'bootstrap logo'} img={'https://cdn.simpleicons.org/bootstrap/7952B3'} rotateY={rotateY} left={"62%"} />
                <Cube top={'90%'} rotateX={rotateX} alt={'css3 logo'} img={'https://skillicons.dev/icons?i=css'} rotateY={rotateY} left={"85%"} />
                <Cube top={'135%'} rotateX={rotateX} alt={'tailwind logo'} img={'https://skillicons.dev/icons?i=tailwind'} rotateY={rotateY} left={"10%"} />
                <Cube top={'103%'} rotateX={rotateX} alt={'react logo'} img={'https://skillicons.dev/icons?i=react'} rotateY={rotateY} left={"35%"} />
                <Cube top={'130%'} rotateX={rotateX} alt={'Next.js logo'} img={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'} rotateY={rotateY} left={"72%"} />
                <Cube top={'163%'} rotateX={rotateX} alt={'redux logo'} img={'https://skillicons.dev/icons?i=redux'} rotateY={rotateY} left={"28%"} />
                <Cube top={'175%'} rotateX={rotateX} alt={'JS logo'} img={'https://skillicons.dev/icons?i=js'} rotateY={rotateY} left={"80%"} />
                <Cube top={'195%'} rotateX={rotateX} alt={'C logo'} img={'https://skillicons.dev/icons?i=c'} rotateY={rotateY} left={"10%"} />
                <Cube top={'195%'} rotateX={rotateX} alt={'Arduino logo'} img={'https://skillicons.dev/icons?i=arduino'} rotateY={rotateY} left={"55%"} />

                <Cube top={'242%'} rotateX={rotateX} alt={'Git logo'} img={'https://skillicons.dev/icons?i=git'} rotateY={rotateY} left={"60%"} />
                <Cube top={'243%'} rotateX={rotateX} alt={'googleCloud logo'} img={'https://skillicons.dev/icons?i=gcp'} rotateY={rotateY} left={"25%"} />
                <Cube top={'275%'} rotateX={rotateX} alt={'VsCode logo'} img={'https://skillicons.dev/icons?i=vscode'} rotateY={rotateY} left={"10%"} />
                <Cube top={'280%'} rotateX={rotateX} alt={'Github logo'} img={'https://skillicons.dev/icons?i=github'} rotateY={rotateY} left={"75%"} />
                <Cube top={'230%'} rotateX={rotateX} alt={'Figma logo'} img={'https://skillicons.dev/icons?i=figma'} rotateY={rotateY} left={"82%"} />

            </div>
        </div>
    )
}

export default SkillsPage