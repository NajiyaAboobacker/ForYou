"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCart } from '../../components/Contexts/CartContext';
import Link from 'next/link';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id || Array.isArray(id)) return;

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const text = await res.text();
        if (!text) {
          throw new Error("Empty response body");
        }

        const data = JSON.parse(text);
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!id || !product) return <p className="m-3">Loading...</p>;

  const handleAddToCart = () => {
    const item = {
      id: product.id.toString(),     // Ensure it's a string
      name: product.title,           // Match your CartItem type
      price: product.price,
      quantity: 1,
      image: product.image,
    };

    addToCart(item);
  };

  return (
    <div className='container'>
    <Link href="/products" >Go to products </Link>
    <div className=" mt-4 d-flex flex-column align-items-center w-50">
      <h3>{product.title}</h3>
      <img src={product.image} width={200} alt={product.title} className="mx-auto" />
      <p className="fs-5 mt-4">{product.description}</p>
      <p><strong>Price:</strong> Rs.{product.price}</p>
      <button onClick={handleAddToCart} className="btn btn-success mt-3 w-50">Add to Cart</button>
    </div>
    </div>
  );
}
