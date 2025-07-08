'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GoToCartButton from '../GoToCartButton/GoToCartButton';
import CartStatus from '../CartStatus/CartStatus';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="d-flex bg-dark fixed-top" style={{ zIndex: 1030, padding: '13px 0 ' }}>
      <img src="/logo.png" width={60} height={50} alt="Logo" style={{ marginLeft: 120 }} />
      <nav>
        <ul className="nav" style={{ marginLeft: 120 }}>
          <li className="nav-item mt-1">
            <Link className="nav-link active text-white" href="/">Home</Link>
          </li>
          <li className="nav-item mt-1">
            <Link className="nav-link text-white" href="/aboutus">About Us</Link>
          </li>
          <li className="nav-item mt-1">
            <Link className="nav-link text-white" href="/contactus">Contact Us</Link>
          </li>
          <li className="nav-item mt-1">
            <Link className="nav-link text-white" href="/products">Products</Link>
          </li>

          <li className="navbar navbar-light d-flex">
            <form className="form-inline d-flex pr-5" onSubmit={handleSearch}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success btn-dark text-white mx-4" type="submit">
                Search
              </button>
            </form>
          </li>

          <li>
            <div style={{ marginLeft: 120 }}>
              <GoToCartButton />
            </div>
          </li>

          <li>
            <CartStatus />
          </li>
        </ul>
      </nav>
    </div>
  );
}
