'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from '@/components/Single';
import { useSelector } from 'react-redux';


export default function Page() {
    const  search  = useSelector(store => {return store.search?.value})
    const [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(response => {
            console.log(response.data)
            setProducts(response.data);
      });
      },[]);
    const filterProducts = products.filter((item) =>{

        return item.category == search || item.title.toLowerCase().includes(search)
    })
  return (
    <div className='bg-white'>
        <div className=' p-6 text-2xl flex justify-center'>All  Products</div>
        <div className='container m-4'>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    filterProducts.map(product => {
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
