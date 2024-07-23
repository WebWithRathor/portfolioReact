import React from 'react'

const Nav = () => {
  return (
    <div className='h-full w-[7vw] pointer-events-none fixed left-0 z-[999] shrink-0 pt-6 px-5'>
        <div className="menu w-full pointer-events-auto aspect-square cursor-pointer group flex flex-col items-center justify-center gap-1.5">
          <div className="line origin-center group-hover:rotate-45 group-hover:translate-y-1 transition-transform w-10 h-0.5 bg-[#6866B5]"></div>
          <div className="line w-10 origin-center group-hover:-rotate-45 group-hover:-translate-y-1 transition-transform h-0.5  bg-[#6866B5]"></div>
        </div>
    </div>
  )
}

export default Nav