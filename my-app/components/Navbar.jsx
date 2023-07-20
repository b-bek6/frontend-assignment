import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'


export default function Navbar() {
  return (
    // <div className='flex container justify-around p-6'>
    //     <div>
    //         <h1 className='text-xl'>OnlineStore</h1>
    //     </div>
    //     <div>
    //         <ul className='flex justify-center gap-8'>
    //             <li>Home</li>
    //             <li>Brand</li>
    //             <li>Recent Product</li>
    //             <li>Contact</li>
    //             <li>About</li>
    //         </ul>
    //     </div>
    //     <div className='flex gap-4'>
    //         <div> <CgProfile /> </div>
    //         <div> <AiOutlineShoppingCart /> </div>
    //         <div> <AiOutlineSearch /> </div>
    //     </div>
    // </div>
    <>
    {/* <header className="p-2 gap-2 bg-[#EEEFFB]  items-center justify-around h-[78px]"> */}
    <header >
        <div className="p-2 flex justify-center">
            <div className="container py-2 gap-2 flex flex-col justify-between items-center md:flex-row ">
            <div>
            <logo href={"/"} className='text-4xl font-bold text-[#0D0E43]'>Heko</logo>
        </div>
        <div>
            <nav>
                <ul className="flex p-2 justify-center align-middle gap-[4vw] font-light">
                    <Link href={"/"}><li> <button> Home</button>  </li></Link>
                    <Link href={""}><li>Pages</li></Link>
                    <Link href={"/products"}><li>Products</li></Link>
                    <Link href={""}> <li>Blog</li></Link>
                    <Link href={""}><li>Shop</li> </Link>
                    <Link href={""}><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
        <form className="flex mt-3">
            <input type="text" name="search_term" className="border w-full outline-none px-2" />
            <button className="bg-secondary text-white p-2 inline">
                <AiOutlineSearch className='inline'/>
            </button>
        </form>
            </div>
        </div>
    </header>
</>
  )
}
