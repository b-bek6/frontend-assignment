'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'



export default function page() {
    const router = useRouter();
    const [user, setUser] = useState({
        username:"",
        passoword:""
    })
    const handleChange = (e) => {
        setUser({...user , [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://fakestoreapi.com/auth/login",{
            username: user.username,
            password: user.password
        })
        .then(res => {
            toast.success('Login Successful!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                router.push('/')
        })
        .catch(res => {
            toast.error(res.response.data, {
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
  return (
    <div>
         <div className='py-24 bg-primary-tint flex justify-center'>
            <div className='container'>
                <p className='text-3xl font-bold text-header capitalize'>
                    Login
                </p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className='container h-[72vh] flex items-center justify-center'>
            <div className='grid gap-4 border  p-[10vh] shadow-xl'>
                <div className='grid gap-2'>
                    <div className='flex flex-col justify-center align-middle items-center mb-8 gap-2'>
                        <label className='text-2xl font-bold capitalize'>Login</label>
                        <p className='opacity-50'>Please login account details bellow.</p>
                    </div>
                <input onChange={handleChange} type="text" name='username' className='border outline-none p-1.5 rounded-md ' placeholder='username'/>
                <input onChange={handleChange} type="password" name='password' className='border outline-none p-1.5 rounded-md ' placeholder='password'/>
                <button type='submit' className=' border rounded-md font-bolt bg-primary text-white p-1.5 disabled:bg-[#84E1BC]'>
                    Login
                </button>
                <p className='opacity-50'>Don't have an Account? <Link href='/signup'>Create Account</Link> </p>
                </div>
            </div>
        </form>


    </div>
  )
}
