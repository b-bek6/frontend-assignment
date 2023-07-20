'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import SingleProduct from '@/components/SingleProduct';

export default function Product() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(response => {
            console.log(response.data)
          setProducts(response.data);
      });
      },[]);
  return (
    <div className='bg-white'>
        <div className=' p-6 text-2xl flex justify-center'>All  Products</div>
        <div className='container m-4'>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    products.map(product => {
                        return<>
                        <SingleProduct product={product}/>
                        </>
                    })
                }
            </div>
        </div>
    </div>
  )
}
