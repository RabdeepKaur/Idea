

import Link from 'next/link'
import React from 'react'
import {auth, signOut, signIn} from "@/auth";


const Navbar = async () => {
  const session = await auth();
  
  return (
    <header className="px-5 py-3  text-white bg-transparent shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        {/* Left section - Logo*/ }
        <Link href="/">
          <span className='text-white'  >IDEA </span>
        </Link>
        
        {/* Center section - Navigation links*/ }
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/discover/project">
            <span className=" hover:text-yc-pink transition-colors">Discover</span>
          </Link>
          <Link href="/about">
            <span className=" hover:text-yc-pink transition-colors">About Us</span>
          </Link>
          {session && session?.user && (
            <Link href="/startup/create">
              <span className=" hover:text-yc-pink transition-colors">Create</span>
            </Link>
          )}
        </div>
        
        {/* Right section - Auth buttons */}
        <div className="flex items-center space-x-4 text-black">
          {session && session?.user ? (
            <>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className=" text-white max-sm:hidden">Logout</span>
                </button>
              </form>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("Github");
              }}
            >
              <button type="submit" className='text-white'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;