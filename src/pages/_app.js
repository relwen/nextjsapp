import '@/styles/globals.css';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import MyLayout from '../../components/MyLayout';
export default function App({ Component, pageProps }) {
  return (
    <>
    
     <MyLayout>
     <Component {...pageProps} />
     </MyLayout>
        


    </>
  );
}
