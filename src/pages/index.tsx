// pages/index.tsx
import Link from 'next/link';
import { OfferProds } from '@/OfferProducts/products';
import OfferProductsHandle from '@/components/OfferProductsHandle/OfferProductsHandle';
export default function Home() {
  return (
    <main>
       
       
      <div className='d-flex' >
        <div className='mb-5 d-flex ' ><img src = "banner.jpg" height="50%" width={550}  className='"img-fluid" m-3 ' /></div>
        <div className='container'>
          <h3 className='text-white text-center bg-dark m-5 p-2' style={{backgroundColor:""}}>****************** Offer Product List ******************</h3>
          
          
          <div className='d-flex flex-wrap gx-3 justify-content-center align-items-center' style={{columnGap:'30px'}}>
                    {OfferProds.map((p) => { 
                        return <OfferProductsHandle key={p.id} product={p}/>
                    })}
          </div>
        </div>

      
      </div>
    </main>
  );
}
