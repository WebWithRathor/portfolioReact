import React, { useRef } from 'react'
import Heading from './partials/Heading'
import { useGSAP } from '@gsap/react';
import { motion} from 'framer-motion';
import gsap from 'gsap';





const ProjectPage = () => {

    const pages = useRef([]);
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
        <div className="page px-20 bg-gradient-to-b from-[#EDE9C9] to-white shrink-0 flex h-full">
            <div className="mt-10">
                <Heading head={'Projects'} />
            </div>
            <div className="items flex ml-14">
                <div ref={pushref} className="project relative z-0 after:absolute after:h-full after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-top after:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-x border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Internshala</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-1/5 before:h-4/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Movie-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-2/5 before:h-3/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Intstagram</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-3/5 before:h-2/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Gallery-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-4/5 before:h-1/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide w-max'>Mini Whatsapp(chatiing)</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-full after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:duration-200 hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Mini Youtube</h1>
                        <h1 className='text-lg tracking-wide'>Clone(FullStack)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-4/5 before:h-1/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>FakeStore-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-3/5 before:h-2/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Quiz-app</h1>
                        <h1 className='text-lg tracking-wide w-max'>(React-api-integration)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-2/5 before:h-3/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Silena</h1>
                        <h1 className='text-lg tracking-wide'>(FrontEnd)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-1/5 before:h-4/5 after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-bottom after:transition-transform before:absolute  before:w-full before:bg-[#6968B5] before:top-0 before:z-[-1] before:scale-y-0 hover:before:scale-y-100 before:origin-top  before:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded z-[9999] overflow-hidden opacity-0 h-[20vh] w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute left-0 "><img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1570630992840-0bdd5732442e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fHww" alt="" /></div>
                    <div className=" text-center -rotate-90 pointer-events-none">
                        <h1 className='text-xl mb-1 tracking-wide'>Ecommerce</h1>
                        <h1 className='text-lg tracking-wide'>(FullStack)</h1>
                    </div>
                </div>
                <div ref={pushref} className="project relative z-0 after:absolute after:h-full after:w-full after:bg-[#6968B5] after:bottom-0 after:z-[-1] after:scale-y-0 hover:after:scale-y-100 after:origin-top after:transition-transform hover:text-white transition-all cursor-pointer h-full w-[10vw] flex flex-col items-center justify-center border-r border-black/[.2] font-medium">
                    <div className="image scale-50 rounded pointer-events-none overflow-hidden absolute opacity-0 h-[20vh] w-full"><img className='h-full w-full object-cover' src="" alt="" /></div>
                    <div className=" text-center pointer-events-none -rotate-90">
                        <h1 className='text-xl mb-1 tracking-wide'>Magma</h1>
                        <h1 className='text-lg tracking-wide'>(FrontEnd)</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectPage