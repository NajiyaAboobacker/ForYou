"use client"
import React from 'react'
import { useRouter } from 'next/router';;
import { useState } from 'react';

export default function Productfilter(props:any) {
    const router = useRouter();
    const [SelectedPrice, setSelectedPrice] = useState<string>();
  


const FilterPrice =(p:any) =>{
   
   router.push(`/pricefilter?pricelimit=${p}`)
   
}

 return (
    <div className='mt-5 bg-dark text-white p-2 text-center'><h3 className='fs-4 text-primary'>Price Filter</h3>
        
         <input type="radio"  name="priceOptions" value = "Below 150" onChange={()=>{

            {FilterPrice(150)};
            }}/><label className='m-3'>Price less than 150</label><br/>
         <input type="radio"  name="priceOptions" value = "Below 300" onChange={()=>{

            {FilterPrice(300)};
            }}/><label className='m-3'>Price less than 300</label><br/>
         <input type="radio"  name="priceOptions" value = "Below 999" onChange={()=>{

            {FilterPrice(999)};
            }}/><label className='m-3'>Price less than 999</label><br/>
         {/* <button className='btn btn-warning' onClick={Filter}>Rough</button> */}

    </div>
    
  )
}
