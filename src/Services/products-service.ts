import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
  static getProducts = async () => {
    const res = await fetch(this.getUrl('/products'), { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  };

  static getProductsById = async (id: number) => {
    const res = await fetch(this.getUrl(`/products/${id}`), { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  };
}
