import React from 'react'
import InfiniteBar from './partials/InfiniteBar'
import Heading from './partials/Heading'

const Education = () => {
  return (
    <div id='Education' className='page educationpage px-10 md:pl-10 md:pr-32 shrink-0 md:w-max w-screen  flex md:flex-row flex-col relative items-end z-0 '>
        <InfiniteBar text={' Education '} rotate={'6deg'} dir={'top'} height={'65vh'}/>
        <div className="text-xl pt-10 md:pb-10 ">
            <h1 className=' font-medium text-4xl'>School</h1>
            <p className='md:-ml-1 mt-3 text-[4.5vw] md:text-[1.25vw] mb-5 md:mb-8'>St Paul Senior Sec Co-Ed School ( 2006 - 2022 )</p>
            <h1 className=' md:-ml-3 font-medium text-4xl'>College</h1>
            <p className=' md:-ml-5 mt-3 text-[4.5vw] md:text-[1.25vw] mb-5 md:mb-8'>Laxmi Narayan College of Technology ( 2022 - 2026 )</p>
            <h1 className='md:-ml-7 font-medium text-4xl'>Certificates</h1>
            <p className='md:-ml-8 mt-3 text-[4.5vw] md:text-[1.25vw]'>C-language ( 3 months )</p>
            <p className='md:-ml-9 mt-2 text-[4.5vw] md:text-[1.25vw]'>Front-End Web-Devlopment ( 3 months )</p>
            <p className='md:-ml-10 mt-2 text-[4.5vw] md:text-[1.25vw] mb-5 md:mb-8'>Back-End Web-Devlopment ( 3 months )</p>
        </div>
    </div>
  )
}

export default Education