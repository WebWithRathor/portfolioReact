import React, { useRef, useState } from 'react'
import Heading from './partials/Heading'
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

const ContactUs = () => {

    const [email, setemail] = useState('');
    const { pathname } = useLocation()
    const personalRoute = pathname.split('/')[1] != '';

    return (
        <div id='Contact' className='page font-[clashDisplay] contactpage min-h-screen h-full w-[100vw] shrink-0 flex md:flex-row flex-col items-evenly justify-center py-12 bg-gradient-to-l md:bg-gradient-to-b from-[#EDE9C9] to-white'>
            {personalRoute ? <Nav /> : ' '}
            <div className="left w-full md:w-1/2 self-start px-5 md:pt-20 md:pl-20">
                <p className='w-full md:w-[90%] leading-8 text-xl text-center tracking-wider'><span className='font-[melodrama] font-medium mb-4 inline-block text-4xl'>Have an idea or project in mind?</span><br /> I’m all ears! Let’s chat about your vision and how we can bring it to life. Send me a message, and let’s start creating something extraordinary together.</p>
            </div>
            <div className="right w-full md:w-1/2 text-center flex flex-col items-center md:items-start  md:self-end py-10 md:pb-20">
                <div className="text scale-[.35] w-full  md:scale-[.7] origin-[30px] md:origin-left">
                    <Heading head={'Slide into My DMs !!'} mt={'auto'} />
                </div>
                <h1 className=' tracking-widest text-[#6866b5]/[.7] font-medium'><a className='after:absolute after:bg-[#6866b5] after:h-[1.5px] after:w-full relative after:left-0 after:top-[110%] after:scale-x-0 after:opacity-50 after:hover:scale-x-100 after:hover:origin-left duration-300 after:transition-transform after:origin-right' href="https://www.linkedin.com/in/devraj-rathor-30a38b20b/">Linkedin </a>| <a className='after:absolute after:bg-[#6866b5] after:h-[1.5px] after:w-full relative after:left-0 after:top-[110%] after:scale-x-0 after:opacity-50 after:hover:scale-x-100 after:hover:origin-left duration-300 after:transition-transform after:origin-right' href="https://github.com/webwithrathor">Github</a> | <a className='after:absolute after:bg-[#6866b5] after:h-[1.5px] after:w-full relative after:left-0 after:top-[110%] after:scale-x-0 after:opacity-50 after:hover:scale-x-100 after:hover:origin-left duration-300 after:transition-transform after:origin-right' href="mailto:devrajrathor143@gmail.com">devrajrathor143@gmail.com</a> </h1>
                <div className="email w-[80%] md:w-2/3 mt-5  flex pl-4 pr-2 py-2 items-center justify-center border-2 rounded ">
                    <input value={email} onChange={(e) => setemail(e.target.value)} className='text-xl text-[#6866B5] outline-none w-full bg-transparent placeholder:text-[#cdc7e5]' type="text" placeholder='SendMail' />
                    <button onClick={() => setemail('')} ><i className="fa-solid text-2xl  h-10 flex items-center justify-center rounded bg-[#6866B5] text-[#fffbdb] px-4 fa-arrow-right-long"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs