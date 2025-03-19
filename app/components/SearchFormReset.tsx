"use client";

import React from 'react'
import Link from 'next/link';

const SearchFormReset = () => {
    const reset=()=>{
        const form= document.querySelector('search-from') as HTMLFormElement
    
        if(form){
            form.reset()
        }
    }
    
  return (
   
      (
        <button type="reset" onClick={reset}>
<Link href="/" className="search-btn"></Link>
x
        </button>
    )
  
  )
}

export default SearchFormReset
