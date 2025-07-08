"use client"

import { useCart } from '../Contexts/CartContext';

export default function CartStatus() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <p className='text-white' style={{ fontWeight: 'bold' }}>{totalItems} </p>
  );
}
