import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Cursor = ({ x, y }) => {

    gsap.to('.inner-circ',{
        top:y + '%',
        left:x + '%',
        stagger:'.02'
    })


    return (
        Array.from({ length: 9 }).map((_, curs) => (
            (<div
                key={curs}  
                className="absolute md:inline-block hidden pointer-events-none inner-circ rounded-full -translate-x-1/2 shadow-[0px_0px_3px_2px_#9d9cc9] -translate-y-1/2 aspect-square inset-0 z-[99]"
                style={{ height: `${27 - (curs * 3)}px`, backgroundColor: `#9d9cc9` ,opacity :`0.${15-curs}`}}
            ></div>)
        ))
    )
}

export default Cursor