
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {auth, signOut, signIn} from "@/auth";


const Navbar = async () => {
  const session = await auth();
  
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        {/* Left section - Logo*/ }
        <Link href="/">
          <Image className='h-15 w-15 rounded-full' src="/logo1.png" alt="logo" width={144} height={30} />
        </Link>
        
        {/* Center section - Navigation links*/ }
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/discover/project">
            <span className="text-black hover:text-yc-pink transition-colors">Discover</span>
          </Link>
          <Link href="/about-us">
            <span className="text-black hover:text-yc-pink transition-colors">About Us</span>
          </Link>
          {session && session?.user && (
            <Link href="/startup/create">
              <span className="text-black hover:text-yc-pink transition-colors">Create</span>
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
                  <span className="max-sm:hidden">Logout</span>
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
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;