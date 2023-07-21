import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { store } from './redux/store'
import { Providers } from './redux/provider'


export function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}


export default function withRedux({children}) {
  return <>
  <Providers>
    <Layout children={children} />
  </Providers>
  </>
}
