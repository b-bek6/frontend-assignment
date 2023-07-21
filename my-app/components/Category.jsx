import React from 'react'
import { BiCube } from 'react-icons/bi'

export default function Category({cat}) {
  return (
    <>
    <div className=' flex md:flex-col gap-4 p-2 flex-row items-center  md:justify-center align-middle h-[50px] w-[250px] md:w-[230px] md:h-[150px] rounded-md shadow-xl ease-in-out bg-white hover:-translate-y-1 hover:scale-105 hover:border-green-300 duration-100'>
        <div className='rounded-full bg-slate-200  '>
            < BiCube className='m-3 md:m-5'/>
        </div>
        <div>{cat}</div>
    </div>
    </>
  )
}
