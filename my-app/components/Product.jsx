import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import SingleProduct from './Single';
import Spinner from './Spinner';


export default function Product() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products?limit=9`)
        .then(response => {
            console.log(response.data)
            setProducts(response.data);
            setLoading(false)
      });
      },[]);
  return (
    <div>
        <div className=' p-6 text-2xl flex justify-center'>All Popular Products</div>
        <div className='container m-4'>
            <div className='grid justify-center items-center md:grid-cols-3 gap-4'>
                {
                    loading
                    ?
                    <div className='col-span-3 grid justify-center'>
                        <Spinner />
                    </div>
                    :
                    products.map(product => {
                        return<>
                            <SingleProduct product={product}/>
                        </>
                    })
                }
            </div>
            {
                !loading
                &&
                <div className='flex justify-center align-middle mt-8'>
                    <button className='btn mb-3 md:w-[200px]'> <Link href={'/products'}>View More</Link> </button>
                </div>
            }
        </div>
    </div>
  )
}
