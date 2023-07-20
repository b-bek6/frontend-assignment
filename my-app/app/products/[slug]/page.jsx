'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BsFillCartPlusFill} from 'react-icons/bs'

export default function page() {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/1`)
        .then(response => {
            console.log(response.data)
          setProduct(response.data);
      });
      },[]);

  return (
    <div>
        <div className='py-24 bg-primary-tint flex justify-center'>
            <div className='container'>
                <p className='text-3xl font-bold text-header capitalize'> {product.title}</p>
                <p>
                    Home  &gt;  Products   &gt; sidebar
                </p>
            </div>
        </div>
        <div className='container grid justify-center m-8'>
            <div className='flex flex-col md:gap-8 gap-4 p-2 md:flex-row items-center min-h-[500px] md:min-w-[900px] md:justify-center align-middle text-left rounded-md shadow-xl'>
            <img className='h-[300px]' src={product.image} alt="product Image" />
            <div className='md:text-left grid gap-4 text-left max-w-[300px]'>
                <div>
                    <p className=' text-xl text-purple-900 font-sans-serif'>{product.title}</p>
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
    </div>
  )
}
