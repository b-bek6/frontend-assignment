'use client'
import { useEffect, useState } from 'react';
import {BiCube} from 'react-icons/bi'
import axios from 'axios';
import Category from './Category';

export default function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response => {
        setCategories(response.data)
        console
  });
  },[]);
  
  return (
    <div>
        <div className='container grid  justify-center align-middle items-center'>
            <div className='bg-white p-6 text-2xl font-Poppins flex justify-center'>Popular Categories</div>

            <div className='flex align-middle justify-center items-center'>
            <div className='grid md:grid-cols-3 xl:grid-cols-4 m-4 gap-4 justify-center align-middle items-center '>
                {
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
