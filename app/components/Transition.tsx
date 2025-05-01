"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
  initial?: import("framer-motion").TargetAndTransition;
  animate?: import("framer-motion").TargetAndTransition;
  exit?: import("framer-motion").TargetAndTransition;
  transition?: import("framer-motion").Transition;
  className?: string;
}

const Transition = ({
  children,
  initial = { y: 50, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  transition = { duration: 0.8, ease: "easeOut" },
  className = "",
}: TransitionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
