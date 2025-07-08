// pages/_app.tsx
import { AppProps } from 'next/app';
import { CartProvider } from '../components/Contexts/CartContext';
import Header from '../components/Header/Header';
import Footer from '@/components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      
      <div style={{ paddingTop: '80px' }}>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </CartProvider>
  );
}
