'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


export default function page() {
    const router = useRouter();
    const [user, setUser] = useState({
            username:'',
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            city:'',
            street:'',
            number:'',
            zipcode:'',
            lat:'',
            long:'',
            phone:''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/users', {
            username:user.username,
            email:user.email,
            password:user.password,
            name:{
                firstname:user.firstname,
                lastname:user.lastname
            },
            address:{
                city:user.city,
                street:user.street,
                number:user.number,
                zipcode:user.zipcode,
                geolocation:{
                    lat:user.lat,
                    long:user.long
                }
            },
            phone:user.phone
        } )
        .then(res => {
            console.log("sucess")
            // router.push('/login')
            toast.success('User created Successfully!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    }
    const handleChange = (e) => {
          setUser({...user, [e.target.name]:e.target.value});
    }
  return (
    <div>
         <div className='py-24 bg-primary-tint flex justify-center'>
            <div className='container'>
                <p className='text-3xl font-bold text-header capitalize'>
                    Sign Up
                </p>
            </div>
        </div>

        <form className='container m-20 flex items-center justify-center'
            onSubmit={handleSubmit}
        >
            <div className='grid gap-4 border  p-[10vh] shadow-xl'>
                <div className='grid gap-2'>
                    <div className='flex flex-col justify-center align-middle items-center mb-8 gap-2'>
                        <label className='text-2xl font-bold capitalize'>Sign Up</label>
                        <p className='opacity-50'>Please signup to create an account.</p>
                    </div>
                    <div
                  className='flex w-full flex-col gap-2'
                >
                  <label htmlFor="title" className='text-lg text-light-primary'>Username <span className='text-red-500'>*</span></label>
                  <input
                    type="text"
                    name='username'
                    placeholder='username'
                    value={user.username}
                    onChange={handleChange}
                    className='border outline-none p-1.5'
                    required

                  />
                </div>
                <div
                  className='flex w-full flex-col gap-2'
                >
                  <label htmlFor="title" className='text-lg text-light-primary'>Email <span className='text-red-500'>*</span></label>
                  <input
                    type="email"
                    name='email'
                    placeholder='email'
                    onChange={handleChange}
                    value={user.email}
                    className='border outline-none p-1.5 '
                    required
                  />
                  </div>
                <div
                  className='flex w-full flex-col gap-2'
                >
                  <label htmlFor="title" className='text-lg text-light-primary'>Password <span className='text-red-500'>*</span></label>
                  <input
                    type="password"
                    name='password'
                    placeholder='password'
                    className='border outline-none p-1.5 '
                    onChange={handleChange}
                    value={user.password}
                    required
                  />
                  </div>
                  <div className='flex gap-4 flex-col md:flex-row md:gap-8'>
                <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>First Name <span className='text-red-500'>*</span> </label>
                    <input
                      type="text"
                      name='firstname'
                      placeholder='Firstname'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.firstname}
                      required
                    />
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Last Name <span className='text-red-500'>*</span> </label>
                    <input
                      type="text"
                      name='lastname'
                      placeholder='Lastname'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.lastname}
                    />
                  </div>
                </div>

                <div className='flex gap-4 flex-col md:flex-row md:gap-8'>
                <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>City <span className='text-red-500'>*</span> </label>
                    <input
                      type="text"
                      placeholder='city'
                      className='border outline-none p-1.5 '
                      name='city'
                      onChange={handleChange}
                      value={user.city}
                      required
                    />
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Street </label>
                    <input
                      type="text"
                      placeholder='street'
                      className='border outline-none p-1.5 '
                      name='street'
                      onChange={handleChange}
                      value={user.street}
                    />
                  </div>
                </div>
                <div className='flex gap-4 flex-col md:flex-row md:gap-8'>
                <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Location Number</label>
                    <input
                      type="number"
                      placeholder='Location Number'
                      className='border outline-none p-1.5 '
                      name='number'
                      onChange={handleChange}
                      value={user.number}
                    />
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>ZipCode</label>
                    <input
                      type="number"
                      placeholder='Zip Code'
                      className='border outline-none p-1.5 '
                      name='zipcode'
                      onChange={handleChange}
                      value={user.zipcode}
                      required
                    />
                  </div>
                </div>
                <div className='flex gap-4 flex-col md:flex-row md:gap-8'>
                <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Latitude</label>
                    <input
                      type="number"
                      name='lat'
                      placeholder='Latitude'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.lat}
                    />
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Longitude</label>
                    <input
                      type="number"
                      name='long'
                      placeholder='Longitude'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.long}
                    />
                  </div>
                </div>

                <div
                  className='flex w-full flex-col gap-2'
                >
                  <label htmlFor="title" className='text-lg text-light-primary'>Phone <span className='text-red-500'>*</span></label>
                  <input
                    type="number"
                    name='phone'
                    placeholder='Phone Number'
                    className='border outline-none p-1.5 '
                    onChange={handleChange}
                    value={user.phone}
                  />
                  </div>
               
                <button type='submit' className=' border rounded-md font-bolt bg-primary text-white p-1.5 disabled:bg-[#84E1BC]'>
                    Sign Up
                </button>
                <p className='opacity-50'>Already have an Account? <Link href='/login'>Login</Link> </p>
                </div>
            </div>
        </form>


    </div>
  )
}
