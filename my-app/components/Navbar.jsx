import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

export default function () {
  return (
    <div className='flex container justify-around m-4 p-6'>
        <div>
            <h1 className='text-xl'>OnlineStore</h1>
        </div>
        <div>
            <ul className='flex justify-center gap-8'>
                <li>Home</li>
                <li>Brand</li>
                <li>Recent Product</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
        <div className='flex gap-4'>
            <div> <CgProfile /> </div>
            <div> <AiOutlineShoppingCart /> </div>
            <div> <AiOutlineSearch /> </div>
        </div>
    </div>
  )
}
