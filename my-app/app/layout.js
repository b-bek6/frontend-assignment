import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Layout({ children }) {
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
