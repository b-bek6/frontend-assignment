'use client'
import { useEffect, useState } from 'react';
import {BiCube} from 'react-icons/bi'
import axios from 'axios';
import Category from './Category';
import Spinner from './Spinner';

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response => {
        setCategories(response.data)
        setLoading(false)
  });
  },[]);
  
  return (
    <div>
        <div className='container grid  justify-center align-middle items-center'>
            <div className='p-6 text-2xl flex justify-center'>Popular Categories</div>

            <div className='flex align-middle justify-center items-center'>
            <div className='grid md:grid-cols-3 xl:grid-cols-4 m-4 gap-4 justify-center align-middle items-center '>
                {   
                    loading
                    ?
                    <div className='col-span-3'>
                        <Spinner/>
                    </div>
                    :

                    categories.map(cat  => {
                        return <Category cat={cat}/>
                    })
                }
            </div>
            </div>
        </div>
      
    </div>
  )
}
