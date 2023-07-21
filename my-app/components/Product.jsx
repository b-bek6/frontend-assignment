import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import SingleProduct from './Single';


export default function Product() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products?limit=9`)
        .then(response => {
            console.log(response.data)
            setProducts(response.data);
      });
      },[]);
  return (
    <div>
        <div className=' p-6 text-2xl flex justify-center'>All Popular Products</div>
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
                <div className='flex justify-center align-middle mt-8'>
                    <button className='btn mb-3 md:w-[200px]'> <Link href={'/products'}>View More</Link> </button>
            </div>
        </div>
    </div>
  )
}
