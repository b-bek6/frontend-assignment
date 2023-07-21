'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '@/components/Spinner'
import Single from '@/components/Single'
import Link from 'next/link'

export default function Page({ params }) {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.slug}`)
        .then(response => {
            setProduct(response.data);
            setLoading(false)
      });
      },[]);

  return (
    <>
    <div className='py-24 bg-primary-tint flex justify-center'>
            <div className='container'>
                <p className='text-3xl font-bold text-header capitalize'>
                     {
                        loading
                        ?
                        <span> Loading... </span>
                        :
                        product[0].category
                        }
                    </p>
                <p>
                    <Link href='/'> Home </Link>  &gt; <Link href='/products'>Products</Link>    &gt; sidebar
                </p>
            </div>
        </div>
    <div className='bg-white'>

        <div className='container m-4'>
            <div className='grid md:grid-cols-3 gap-4 '>
        {
            loading
            ?
            <div className='min-h-[60vh] col-span-3 w-full flex justify-center items-center'>
                <Spinner/>
                <p>Loading</p>
            </div>
            :
            <>
                {
                    product.map(product => {
                        return <Single product={product}/>
                    })
                }
            
            </>
        }
        </div>
        </div>
    </div>
    </>
  )
}
