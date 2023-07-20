'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';


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
                        <div  className=' flex md:flex-col gap-4 p-2 flex-row items-center  md:justify-center align-middle min-h-[300px] rounded-md shadow-xl ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-green-300 duration-100'>
                                     <img src={product.image} alt="product Image" height={100} width={100}/>
                                    <div className='md:text-center'>
                                    <p className=' text-xl text-secondary'>{product.title}</p>
                                    <p>Price: $ {product.price}</p>

                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    </div>
  )
}
