// "use client"

// import React from 'react';
// import { useCart } from '../Contexts/CartContext';
// import { CartItem } from '../types/cart';

// type AddToCartProps = {
//   product: {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
//   };
// };

// const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     const item: CartItem = {
//       ...product,
//       quantity: 1,
//     };

//     addToCart(item);
//   };

//   return (
//     <button
//       onClick={handleAddToCart}
//       style={{
//         padding: '8px 16px',
//         backgroundColor: '#0070f3',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         marginTop: '8px',
//       }}
//     >
//       Add to Cart
//     </button>
//   );
// };

// export default AddToCart;
