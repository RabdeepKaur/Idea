"use client"
import React,{useRef} from 'react';
import {motion} from 'framer-motion'
import {useInView } from 'framer-motion'

interface TransitionProps {
  children: React.ReactNode;
}

const Transition = ({ children }: TransitionProps) => {
  const ref=useRef(null);
  const isInView=useInView(ref,{once:false});


  
  return (
    <div>
      <motion.div
      ref={ref}
      initial={{ y: 0, opacity: 1 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 1000, opacity: 0 }} // exit down on scroll out
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      {children}
    </motion.div>


    </div>
  )
}

export default Transition
