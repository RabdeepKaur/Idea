import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className=" bg-black text-white py-5 px-10 flex ">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-center">© 2025 Idea. All rights reserved.</p>
            </div>
            <div className="flex-1 flex justify-center space-x-4">
                <a href="/privacy" className="text-white hover:text-gray-400"> </a>
                <a href="/terms" className="text-white hover:text-gray-400">Terms of Service</a>
            </div>
            <div className="flex-1 flex justify-end space-x-4">
                <a href="/contact" className="text-white hover:text-gray-400"><FaGithub /> <FaLinkedin /></a>
                <a href="/about" className="text-white hover:text-gray-400">About Us</a>
            </div>
            </footer>      
    </div>
  )
}

export default Footer
