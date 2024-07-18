import React from 'react'
import InfiniteBar from './partials/InfiniteBar'
import Heading from './partials/Heading'

const Education = () => {
  return (
    <div className='page pl-10 pr-32 shrink-0  flex relative items-end z-0 bg-gradient-to-b from-[#EDE9C9] to-white'>
        <div className="text-xl text-right pb-10">
            <h1 className='mr-[5vw] font-medium text-4xl'>School</h1>
            <p className='mr-[5vw] mt-3 text-[1.25vw] mb-8'>St Paul Senior Sec Co-Ed School ( 2006 - 2022 )</p>
            <h1 className=' mr-[2.5vw] font-medium text-4xl'>College</h1>
            <p className=' mr-[2.5vw] mt-3 text-[1.25vw] mb-8'>Laxmi Narayan College of Technology ( 2022 - 2026 )</p>
            <h1 className='font-medium text-4xl'>Certificates</h1>
            <p className='mt-3 text-[1.25vw]'>C-language ( 3 months )</p>
            <p className='mt-2 text-[1.25vw]'>Front-End Web-Devlopment ( 3 months )</p>
            <p className='mt-2 text-[1.25vw] mb-8'>Back-End Web-Devlopment ( 3 months )</p>
        </div>
        <InfiniteBar text={' Education '} rotate={'-6deg'} dir={'top'} height={'65vh'}/>
    </div>
  )
}

export default Education