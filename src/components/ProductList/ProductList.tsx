'use client';

import { useSearchParams } from 'next/navigation';
import ProductCard from '../Product-card/ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type Props = {
  products?: Product[]; // optional now
};

export default function ProductList({ products }: Props) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toLowerCase() || '';

  // 🟡 Show loading state while products are undefined or null
  if (!products) {
    return <p className="m-3 text-muted">Loading products...</p>;
  }

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return (
    <div className="d-flex flex-wrap">
      {filtered.length > 0 ? (
        filtered.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        
        <p className="text-muted m-3">No matching products found.</p>
      )}
    </div>
  );
}
