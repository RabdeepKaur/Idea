import React from 'react'

const Footer = () => {
  return (
<footer className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">IDEA</h3>
            <p className="text-gray-400 mb-4">
              Giving life to abandoned projects through collaboration
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-green-400">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-green-400">Discord</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">For Project Owners</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400">List Your Project</a></li>
               <li><a href="#" className="hover:text-green-400">Browse Projects</a></li>
              <li><a href="#" className="hover:text-green-400">How It Works</a></li>
            </ul>
          </div>
          
         </div>
       
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 IDEA. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-green-400">Privacy Policy</a>
              <a href="#" className="hover:text-green-400">Terms of Service</a>
              <a href="#" className="hover:text-green-400">Contact</a>
            </div>
          </div>
        </div>
  
    </footer>
  );
};
 
export default Footer
