// pages/pricefilter.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductCard from '../../components/Product-card/ProductCard';
import Productfilter from '../../components/ProductFilter/Productfilter';

export default function PriceFilterPage() {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);
  const pricelimit = parseFloat(router.query.pricelimit as string) || 0;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => p.price <= pricelimit);

  return (
    <div className="d-flex container">
      <div className="m-1" style={{ width: 200 }}>
        <Productfilter />
      </div>
      <div className="" style={{ width: 1000 }}>
        <h3 className="m-3 text-danger">
          Products with Price Less than {pricelimit}
        </h3>
        <div className="d-flex flex-wrap">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
