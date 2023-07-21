'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BsFillCartPlusFill} from 'react-icons/bs'
import Image from 'next/image'
import Spinner from '@/components/Spinner'
import Link from 'next/link'


export default function Page({params}) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.slug}`)
        .then(response => {
            setProduct(response.data);
            setLoading(false)
      });
      },[]);

  return (
    <div>   
        <div className='py-24 bg-primary-tint flex justify-center'>
            <div className='container'>
                <p className='text-3xl font-bold text-header capitalize'>
                     {
                        loading
                        ?
                        <span> Loading... </span>
                        :
                        product.title
                        }
                    </p>
                <p>
                    <Link href='/'> Home </Link>  &gt; <Link href='/products'>Products</Link>    &gt; sidebar
                </p>
            </div>
        </div>
        {
            loading
            ?
            <div className='min-h-[60vh] col-span-3 w-full flex justify-center items-center'>
                <Spinner/>
                <p>Loading</p>
            </div>

            :
            <div className='container grid justify-center m-8'>
                <div className='flex flex-col md:gap-8 gap-4 p-2 md:flex-row items-center min-h-[500px] md:min-w-[900px] md:justify-center align-middle text-left rounded-md shadow-xl'>
                <Image src={product.image} className='' alt='Product Image' height={200} width={200} />
                <div className='md:text-left grid gap-4 text-left max-w-[300px]'>
                    <div>
                        <p className='mb-2 text-2xl font-bold  text-gray-900'>{product.title}</p>
                        <p>Price: $ {product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                    </div>
                    <div>

                    <BsFillCartPlusFill className='text-4xl'/>
                    </div>
                </div>
                </div>

            </div>
        }
            
    </div>
  )
}
