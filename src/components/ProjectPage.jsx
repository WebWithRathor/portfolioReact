import React, { useRef } from 'react'
import Heading from './partials/Heading'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import internshala from '../assets/images/Screenshot 2024-07-26 201119.png'
import Photography from '../assets/images/Screenshot 2024-07-26 201227.png'
import Movie from '../assets/images/Screenshot 2024-07-26 201406.png'
import Quiz from '../assets/images/Screenshot 2024-07-26 201458.png'
import Fake from '../assets/images/Screenshot 2024-07-26 201557.png'
import Silena from '../assets/images/Screenshot 2024-07-26 202821.png'
import Yt from '../assets/images/Screenshot 2024-07-26 202443.png'
import Magma from '../assets/images/Screenshot 2024-07-26 202618.png'
import Ecom from '../assets/images/Screenshot 2024-07-26 202017.png'
import Whatsapp from '../assets/images/whatsapp.png'
import { useLocation } from 'react-router-dom';
import Nav from './Nav';




const ProjectPage = () => {

    const pages = useRef([]);
    const {pathname} = useLocation()
    const personalRoute = pathname.split('/')[1] != '';
    const pushref = (el) => {
        pages.current.push(el);
    }

    useGSAP(() => {
        if (pages.length != 0) {
            pages.current.forEach((project,i) => {
                project.addEventListener('mousemove',(e)=>{
                    gsap.to(project.firstChild,{
                        left:e.offsetX,
                        top:e.offsetY,
                        rotate:e.movementY
                    })
                })
                project.addEventListener('mouseenter',(e)=>{
                    gsap.to(project.firstChild,{
                        opacity:1,
                        scale:1,
                    })
                })
                project.addEventListener('mouseleave',(e)=>{
                    gsap.to(project.firstChild,{
                        opacity:0,
                        scale:0.5,
                    })
                })
            });
        };
    },[pages])

    return (
        <div id='Projects' className={`page font-[clashDisplay] projectpage md:px-20 ${personalRoute ? 'md:pl-32' : ' '} md:w-max bg-gradient-to-l md:bg-gradient-to-b from-[#EDE9C9] to-white shrink-0 flex md:flex-row flex-col h-full min-h-screen`}>
            {personalRoute ? <Nav/> : ' '}
            <div className="mt-10 md:scale-100 scale-75">
                <Heading head={'Projects'} />
            </div>
            <div className="items flex md:flex-row flex-col mt-12 md:mt-0 md:ml-14">
                <a href='https://github.com/WebWithRathor/Intershala-Api.git' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-full after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-top after:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-y md:border-x border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={internshala} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Internshala</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div></a>
                <a href='https://movie-app-3h27.onrender.com' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-1/5 before:h-4/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Movie} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Movie-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div></a>
                <a href='https://github.com/WebWithRathor/insta-clone.git' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-2/5 before:h-3/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src='https://imgs.search.brave.com/pgSDlw4BEPvR-LrGs6_yBHrOiet0QC6P4gOYWoGaA_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5mbHV4ZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA3L0luc3RhZ3Jh/bS1Qcm9maWxlLU1v/Y2t1cC0yMDE3LSVF/MiU4MCU5My1XaW5k/b3dzLWZvbnRzLTI4/MHgyMjUucG5n' alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Intstagram</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div></a>
                <a href='https://gallery-moho.onrender.com'><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-3/5 before:h-2/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Photography} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Gallery-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div></a>
                <a href='https://github.com/WebWithRathor/miniWhatsapp-clone.git' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-4/5 before:h-1/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Whatsapp} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide w-max'>Mini Whatsapp(chatiing)</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div></a>
                <a href='https://github.com/WebWithRathor/Youtube-clone.git' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-full after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:duration-200 hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Yt} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Mini Youtube</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div></a>
                <a href='https://fakestore-api-1j8i.onrender.com'><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-4/5 before:h-1/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Fake} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>FakeStore-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div></a>
                <a href='https://curio-quiz.onrender.com' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-3/5 before:h-2/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Quiz} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Quiz-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div></a>
                <a href='https://webwithrathor.github.io/Silena/' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-2/5 before:h-3/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Silena} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Silena</h1>
                        <h1 className='text-lg tracking-wide'>(FrontEnd)</h1>
                    </div>
                </div></a>
                <a href='https://github.com/WebWithRathor/Ecommerce.git' ><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-1/5 before:h-4/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Ecom} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Ecommerce</h1>
                        <h1 className='text-lg tracking-wide'>(FullStack)</h1>
                    </div>
                </div></a>
                <a href='https://github.com/WebWithRathor/Magma.git'><div ref={pushref} className=" after:duration-200 before:duration-200 project relative z-0 after:absolute after:h-1/5 before:h-4/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer md:h-full md:w-[10vw] w-full h-[13vh] flex flex-col items-center justify-center border-b md:border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 md:h-[20vh] md:w-[15vw] h-[30vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src={Magma} alt="" /></div>
                    <div className=" text-center md:-rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Magma</h1>
                        <h1 className='text-lg tracking-wide'>(FrontEnd)</h1>
                    </div>
                </div></a>
              

            </div>
        </div>
    )
}

export default ProjectPage