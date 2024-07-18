import React from 'react'
import Heading from './partials/Heading'

const ContactUs = () => {


    return (
        <div className='page h-full w-screen shrink-0 flex flex-col items-center justify-center py-12 bg-gradient-to-b from-[#EDE9C9] to-white'>
            <Heading head={'Contact Me'} mt={'auto'} mr={true} />
            <h1 className='mt-2 tracking-widest text-[#6866b5]/[.7] font-medium'>Linkedin | Github | Instagram</h1>
            <form className="email mt-10 w-1/3 flex pl-4 pr-2 py-2 items-center justify-center border-2 rounded mx-auto">
                <input className='text-xl text-[#6866B5] outline-none w-full bg-transparent placeholder:text-[#cdc7e5]' type="text" placeholder='SendMail' />
                <button><i class="fa-solid text-2xl  h-10 flex items-center justify-center rounded bg-[#6866B5] text-[#fffbdb] px-4 fa-arrow-right-long"></i></button>
            </form>
        </div>
    )
}

export default ContactUs