import React from 'react'

const SkillsPage = () => {
    return (
        <div className="skillpage pl-10 px-20 shrink-0 flex h-full">
            <h1 className='text-9xl font-[Melodrama] font-medium pb-7 mt-auto mr-24 text-[#6968B5]'>Skills</h1>
            <div className="skills flex w-[65vw] gap-5 flex-wrap py-12">
                <div className="skill flex-1  rounded-3xl p-10  shrink-0  bg-gradient-to-t from-[#CDC7E5] via-transparent to-transparent">
                    <h1 className='text-5xl'>Backend Technologies</h1>
                    <div className="flex gap-5 mt-5">
                        <img src="https://skillicons.dev/icons?i=nodejs" className='h-16' alt="nodejs logo" />
                        <img src="https://skillicons.dev/icons?i=express" className='h-16' alt="express logo" />
                        <img src="https://cdn.simpleicons.org/postman/FF6C37" className='h-16' alt="postman logo" />
                        <img src="https://skillicons.dev/icons?i=mongodb" className='h-16' alt="mongodb logo" />
                    </div>

                </div>
                <div className="skill flex-1 rounded-3xl h-max p-10 shrink-0  bg-gradient-to-t from-[#CDC7E5] via-transparent to-transparent">
                    <h1 className='text-5xl'>FrontEnd Technologies </h1>
                    <div className="flex gap-5 flex-wrap mt-5">
                        <img src="https://skillicons.dev/icons?i=html" className='h-16' alt="html5 logo" />
                        <img src="https://cdn.simpleicons.org/bootstrap/7952B3" className='h-16' alt="bootstrap logo" />
                        <img src="https://skillicons.dev/icons?i=css" className='h-16' alt="css3 logo" />
                        <img src="https://skillicons.dev/icons?i=tailwind" className='h-16' alt="tailwindcss logo" />
                        <img src="https://skillicons.dev/icons?i=react" className='h-16' alt="react logo" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className='h-16' alt="nextjs logo" />
                        <img src="https://skillicons.dev/icons?i=redux" className='h-16' alt="redux logo" />
                    </div>

                </div>
                <div className="skill w-full rounded-3xl pt-10 px-10 h-max py-8 shrink-0  bg-gradient-to-t from-[#CDC7E5] via-transparent to-transparent">
                    <h1 className='text-6xl'>Other's</h1>
                    <div className='flex flex-wrap gap-5 mt-12'>
                        <img src="https://skillicons.dev/icons?i=js" className='h-16' alt="javascript logo" />
                        <img src="https://skillicons.dev/icons?i=c" className='h-16' alt="c logo" />
                        <img src="https://skillicons.dev/icons?i=arduino" className='h-16' alt="arduino logo" />
                        <img src="https://skillicons.dev/icons?i=git" className='h-16' alt="git logo" />
                        <img src="https://skillicons.dev/icons?i=gcp" className='h-16' alt="googlecloud logo" />
                        <img src="https://skillicons.dev/icons?i=vscode" className='h-16' alt="vscode logo" />
                        <img src="https://skillicons.dev/icons?i=github" className='h-16' alt="github logo" />
                        <img src="https://skillicons.dev/icons?i=figma" className='h-16' alt="figma logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage