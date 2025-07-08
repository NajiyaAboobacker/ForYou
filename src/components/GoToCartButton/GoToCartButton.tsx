"use client"
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useRouter } from 'next/navigation';


export default function cartButton() {
        const router = useRouter();
  return (
    <div>
         <button className='mt-2 ' onClick={() => {
          router.push(`/cartpage`)
          }}  >  
           < FaCartArrowDown className='bg-dark' height="500px" width="500px" color="white" fontSize="35px"/> 
           
          </button>
        
    </div>
  )
}
