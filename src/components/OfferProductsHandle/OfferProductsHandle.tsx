"use client"

import Link from 'next/link'
import { CartItem } from '../types/cart';

import { useContext } from 'react';
import {useCart} from '../Contexts/CartContext';
function OfferProducts(props:any) {
    var prod = props.product;
    
    const {addToCart} =useCart();
    
    const offerPrice = Math.floor(prod.price - 5)*1000/1000;
    
    
    const handleAddToCart = () => {
            const item: CartItem = {
            ...prod,
            quantity: 1,
            price:offerPrice
            };
            addToCart(item);
        };
    return ( 
        <div className='d-flex flex-column align-items-center border border-1 mb-5 p-2'>
            {/* <Link href={'/products/'+ prod.id}> */}
            <Link href={`/products/${prod.id}`}>
            <div  className='m-2 ' style={{width : 200}}>               
                <img className="mx-auto d-block mb-2" src = {prod.image} width={50}/>               
                { 
                <h6 className='text-center mb-2 '>{prod.title}</h6>  
                            
                }
                <h5 className='text-dark text-center'>Rs.{prod.price} </h5>   
            </div>
            </Link>
            <div >
                 <button className="btn text-white" style={{backgroundColor:'black'}} onClick={handleAddToCart}>Add to Cart</button>
            </div>
           
        </div>
      
      
     );
}

export default OfferProducts;