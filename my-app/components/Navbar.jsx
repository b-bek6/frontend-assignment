'use client'

import React, { useState } from 'react'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setReduxSearch } from '@/app/redux/slice/searchSlice'
import { useRouter } from 'next/navigation'

export default function Navbar() {
    const router = useRouter()
    const dispatch = useDispatch();
    const  search  = useSelector(store => {return store.search?.value})
    const [term, setTerm] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setReduxSearch(term.toLowerCase()))
        console.log(search)
        router.push('/products');
        
    }

  return (
    <>
    <header >
        <div className="p-2 flex justify-center">
            <div className="container py-2 gap-2 flex flex-col justify-between items-center md:flex-row ">
            <div>
                <Link href={'/'}>
                    <logo href={"/"} className='text-4xl font-bold text-[#0D0E43]'>OnlineStore</logo>
                </Link>
        </div>
        <div>
            <nav>
                <ul className="flex p-2 justify-center align-middle gap-[4vw] font-light">
                    <Link href={"/"}><li> <button> Home</button>  </li></Link>
                    <Link href={"/products"}><li>Products</li></Link>
                    <Link href={"/category"}><li>Categories</li></Link>
                    <Link href={""}> <li>Blog</li></Link>
                    <Link href={""}><li>Shop</li> </Link>
                    <Link href={""}><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
        <form className="flex mt-3" onSubmit={ submitHandler }>
            <input type="text" value={term} onChange={(e)=>{
                setTerm(e.target.value)
            }} className="border w-full outline-none px-2" />
            <button className="bg-secondary text-white p-2 inline">
                <AiOutlineSearch className='inline' type='submit'/>
            </button>
        </form>
            </div>
        </div>
    </header>
</>
  )
}
