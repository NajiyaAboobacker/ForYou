
import { useCart } from '../../components/Contexts/CartContext';
import Link from 'next/link';
import React from 'react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h3 className='text-danger'>Your cart is empty.</h3>
        <Link href="/products">Go to Products</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
        <div className='d-flex justify-content-between'>
            <div><h2 className='text-primary mb-3 mx-5'><u>Shopping Cart</u></h2></div>
            <div className='my-3'><button className="btn btn-warning" onClick={clearCart}>Clear Cart</button></div>
            <div><Link  className=' mb-3 mx-5' href="/products">Go to Products</Link></div>        
        </div>
      
      {cart.map((item) => (
         <Link href={`/products/${item.id}`}>
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '16px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
          />
          <div>
            <h3>{item.name}</h3>
            <h5>Price: Rs.  {item.price.toFixed(2)}</h5>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>

            <button className='btn btn-warning'
              onClick={() => removeFromCart(item.id)}
              style={{ marginTop: '10px', color: 'white',  padding: '6px 12px', border: 'none', borderRadius: '4px' }}
            >
              Remove
            </button>
          </div>
        </div>
        </Link>
      ))}

      <hr />
      <h4 className='text-primary'>Total: Rs.{totalAmount.toFixed(2)}</h4>

      
    </div>
  );
}
