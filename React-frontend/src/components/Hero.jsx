import React, {useRef} from 'react'
import Nav from './Nav'
// import gsap from 'gsap'
import { motion } from "framer-motion"




function Hero(props) {
    const {onSectionChange} = props;
    const textAnimate1 = {
        hidden:{
            y:'100%',
            opacity: 0,
            color:"#0f0f0f",
        },
        show:{
            y:0,
            opacity:1,
            color:"#ffffff",
            transition:{
                ease: 'easeInOut',
                duration:0.8,
                staggerChildren:0.4,
                delayChildren:1
            }
        }
    }
    const textAnimate2 = {
        hidden:{
            x:"-100px",
            opacity: 0,
        },
        show:{
            x:0,
            opacity:1,

            transition:{
                ease: "easeInOut",
                duration:0.8,
                delay:2,
            }
        }
    }

  return (
    <motion.div className="px-4 mx-auto max-w-screen-xl text-center h-screen py-24 lg:py-56">
        <motion.h1 variants={textAnimate1} initial="hidden" animate="show" className="mb-4 text-6xl font-extrabold tracking-tight leading-none uppercase text-white md:text-5xl lg:text-6xl">srijan 2024</motion.h1>
        <motion.p variants={textAnimate2} initial="hidden" animate="show" className="mb-8 overflow-x-hidden text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Get a taste of the flavours all around the world. The biggest cultural fest is back!</motion.p>
        <motion.button variants={textAnimate2} initial="hidden" animate="show" type="button" onClick={() => onSectionChange(5.85)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Coming Soon!</motion.button>
    </motion.div>
  );
}

export default Hero
