
"use client"
import React, { useEffect,useState } from 'react'
import { useCart } from '../Contexts/CartContext';
import Link from 'next/link';
import { CartItem } from '../types/cart';

export default function ProductCard(props:any) {
    var prod = props.product; 
    const { addToCart } = useCart();
   const handleAddToCart = () => {
  addToCart({
    id: String(prod.id),
    name: prod.title,     // ✅ title → name
    price: prod.price,
    quantity: 1,
    image: prod.image
  });
};

    return (
        <div className='d-flex flex-column align-items-center border border-1 mb-5'>
            {/* <Link href={'/products/'+ prod.id}> */}
            <Link href={`/products/${prod.id}`}>
            <div  className='m-2 ' style={{width : 200}}>               
                <img className="mx-auto d-block mb-2" src = {prod.image} width={50}/>               
                { 
                <h6 className='text-center mb-2 '>{prod.title}</h6>  
                            
                }
                <h5 className='text-dark text-center'>Rs. {prod.price} </h5>   
            </div>
            </Link>
            <div >
                 <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
            </div>
           
        </div>
      
      
        )
}
