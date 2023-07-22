import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { store } from './redux/store'
import { Providers } from './redux/provider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='flex flex-col app'>
          <Navbar />
          <div className='min-h-[50vh]'>
          {children}
          </div>
          <Footer />
          <ToastContainer/>
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
