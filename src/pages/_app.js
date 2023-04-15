import '@/styles/globals.css'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>

      <main className='container'>
        <nav>
            <ul><Link href="/">Accueil</Link>
              <Link href="/about">A propos de nous</Link>
              <Link href="/contact">Contact</Link>
            </ul>
        </nav>
          <Component {...pageProps} />
        <h1>Footer</h1>
      </main>


    </>
  );
}
