'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Category from '@/components/Category';

export default function Page() {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response => {
        setCategories(response.data)
        console
  });
  },[]);
  
  return (
    <div className='min-h-[60vh] flex justify-center items-center'>
        <div className='container grid  justify-center  items-center'>
        <div className='bg-white text-2xl font-Poppins flex justify-center'>All Categories</div>
            <div className='grid md:grid-cols-3 xl:grid-cols-4 m-4 gap-4 justify-center align-middle items-center '>
                {
                    categories.map(cat  => {
                        return <Category cat={cat}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}
