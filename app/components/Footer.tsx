import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className="  flex justify-between w-full bg-black text-white p-6 mt-10">
            <div className="flex items-center gap-6">
                <p className="text-center">© 2025 Idea. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
                <a href="/terms" className=" ">Terms of Service</a>
                <a href="/contact" className=" flex items-center gap-3 "><FaGithub /> <FaLinkedin /></a>
                <a href="/about" className="flex items-center gap-3">About Us</a>
            </div>
            </footer>      
    </div>
  )
}

export default Footer
