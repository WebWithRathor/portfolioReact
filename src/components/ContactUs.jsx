import React, { useRef, useState } from 'react'
import Heading from './partials/Heading'

const ContactUs = () => {

    const [email, setemail] = useState('')

    return (
        <div className='page contactpage h-full w-screen shrink-0 flex flex-col items-center justify-center py-12 bg-gradient-to-b from-[#EDE9C9] to-white'>
            <Heading head={'Contact Me'} mt={'auto'} mr={true} />
            <h1 className='mt-2 tracking-widest text-[#6866b5]/[.7] font-medium'><a className='after:absolute after:bg-[#6866b5] after:h-[1.5px] after:w-full relative after:left-0 after:top-[110%] after:scale-x-0 after:opacity-50 after:hover:scale-x-100 after:hover:origin-left duration-300 after:transition-transform after:origin-right' href="https://www.linkedin.com/in/devraj-rathor-30a38b20b/">Linkedin </a>| <a className='after:absolute after:bg-[#6866b5] after:h-[1.5px] after:w-full relative after:left-0 after:top-[110%] after:scale-x-0 after:opacity-50 after:hover:scale-x-100 after:hover:origin-left duration-300 after:transition-transform after:origin-right' href="https://github.com/webwithrathor">Github</a> | <a className='after:absolute after:bg-[#6866b5] after:h-[1.5px] after:w-full relative after:left-0 after:top-[110%] after:scale-x-0 after:opacity-50 after:hover:scale-x-100 after:hover:origin-left duration-300 after:transition-transform after:origin-right' href="mailto:devrajrathor143@gmail.com">devrajrathor143@gmail.com</a> </h1>
            <div className="email mt-5 w-1/3 flex pl-4 pr-2 py-2 items-center justify-center border-2 rounded mx-auto">
                <input value={email} onChange={(e)=>setemail(e.target.value)}  className='text-xl text-[#6866B5] outline-none w-full bg-transparent placeholder:text-[#cdc7e5]' type="text" placeholder='SendMail' />
                <button onClick={()=>setemail('')} ><i className="fa-solid text-2xl  h-10 flex items-center justify-center rounded bg-[#6866B5] text-[#fffbdb] px-4 fa-arrow-right-long"></i></button>
            </div>
        </div>
    )
}

export default ContactUs