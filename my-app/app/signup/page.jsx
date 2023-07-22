'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


export default function page() {
    const router = useRouter();
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        name:{
            firstname:'',
            lastname:''
        },
        address:{
            city:'',
            street:'',
            number:'',
            zipcode:'',
            geolocation:{
                lat:'',
                long:''
            }
        },
        phone:''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/users', user )
        .then(res => {
            console.log("sucess")
            router.push('/login')
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
        const { name, value } = e.target;
        const nestedNames = name.split('.');
        if (nestedNames.length === 2) {
          const [nestedProperty, subProperty] = nestedNames;
          setUser((prevUser) => ({
            ...prevUser,
            [nestedProperty]: {
              ...prevUser[nestedProperty],
              [subProperty]: value
            }
          }));
        }else if (nestedNames.length === 3 && nestedNames[0] === 'address' && nestedNames[1] === 'geolocation') {
            const [parentProperty, nestedProperty, subProperty] = nestedNames;
            setUser((prevUser) => ({
              ...prevUser,
              [parentProperty]: {
                ...prevUser[parentProperty],
                [nestedProperty]: {
                  ...prevUser[parentProperty][nestedProperty],
                  [subProperty]: value
                }
              }
            }))
        } else {
          setUser((prevUser) => ({
            ...prevUser,
            [name]: value
          }));
        }
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
                      name='name.firstname'
                      placeholder='Firstname'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.name.firstname}
                      required
                    />
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Last Name <span className='text-red-500'>*</span> </label>
                    <input
                      type="text"
                      name='name.lastname'
                      placeholder='Lastname'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.name.lastname}
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
                      name='address.city'
                      onChange={handleChange}
                      value={user.address.city}
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
                      name='address.street'
                      onChange={handleChange}
                      value={user.address.street}
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
                      name='address.number'
                      onChange={handleChange}
                      value={user.address.number}
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
                      name='address.zipcode'
                      onChange={handleChange}
                      value={user.address.zipcode}
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
                      name='address.geolocation.lat'
                      placeholder='Latitude'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.address.geolocation.lat}
                    />
                  </div>
                  <div
                    className='flex w-full flex-col gap-2'
                  >
                    <label htmlFor="website" className='text-lg  text-light-primary'>Longitude</label>
                    <input
                      type="number"
                      name='address.geolocation.long'
                      placeholder='Longitude'
                      className='border outline-none p-1.5 '
                      onChange={handleChange}
                      value={user.address.geolocation.long}
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
