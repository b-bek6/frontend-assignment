import React from 'react'

export default function Footer() {
  return (
    <div className='bg-poster'>
    <div className='container md:flex gap-8 p-10 justify-around align-middle'>
      <div className='flex gap-2 flex-col'>
        <label className='text-2xl'>OnlineStore</label>
        <ul>
          {/* <li>Laptops & Computers</li> */}
          <li>Contact info</li>
          <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
        </ul>
      </div>
      <div className='flex gap-2 flex-col'>
        <label className='text-2xl '>Categories</label>
        <ul>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Console</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>
      <div className='flex gap-2 flex-col'>
        <label className='text-2xl '>Customer Care</label>
        <ul>
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History </li>
          <li>Order Tracking</li>
        </ul>
        </div>
      <div className='flex gap-2 flex-col'>
        <label className='text-2xl '>Pages</label>
        <ul>
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages </li>
          <li>Visual Composer</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </div>
    
    <div className=' flex justify-center bg-black text-white p-6 text-sm absolute left-0 right-0 bottom-0'>
        © 2023 Jobs Portal. Designed By Bibek Ghimire.
    </div>
    </div>
  )
}
