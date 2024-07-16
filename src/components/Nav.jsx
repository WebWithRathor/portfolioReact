import React from 'react'

const Nav = () => {
  return (
    <div className='h-full w-[5vw] sticky left-0 flex flex-col gap-10 text-2xl  justify-center items-center text-white z-[999] shrink-0 bg-[#6968B5] p-5'>
        <i class="fa-solid fa-circle-user"></i>
        <i class="fa-solid fa-gears"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-linkedin"></i>
    </div>
  )
}

export default Nav