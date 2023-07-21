'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from '@/components/Single';
import { useDispatch, useSelector } from 'react-redux';
import { setReduxSearch } from '../redux/slice/searchSlice';
import NotFound from '@/components/NotFound';
import Spinner from '@/components/Spinner';


export default function Page() {
    const  search  = useSelector(store => {return store.search?.value})
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then(response => {
            console.log(response.data)
            setProducts(response.data);
            setLoading(false);
      });
      },[]);
    const filterProducts = products.filter((item) =>{
        return item.category == search || item.title.toLowerCase().includes(search)
    })

  return (
    <div className='bg-white'>
        <div className=' p-6 text-2xl flex justify-center'>All  Products</div>
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
                    filterProducts.map(product => {
                        return<>
                        <SingleProduct product={product}/>
                        
                        </>
                    })
                }
            {
                filterProducts.length == 0
                &&
                <div  className='col-span-3'>
                <NotFound/>
                </div>
            }
            </>
        }
        </div>
        </div>
    </div>
  )
}
