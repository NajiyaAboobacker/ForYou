import React, { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { ProductsService } from '../../Services/products-service';
import Productfilter from '../../components/ProductFilter/Productfilter';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await ProductsService.getProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className='container d-flex'>
      <div className='m-5 ' style={{ width: 250 }}>
        <Productfilter />
      </div>

      <div className='' style={{ width: 1000 }}>
        <h3 className='m-3'>Product List</h3>
        <ProductList products={products} />
      </div>
    </div>
  );
}
