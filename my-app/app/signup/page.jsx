import Link from 'next/link'
import React from 'react'


export default function page() {
  return (
    <div>
         <div className='py-24 bg-primary-tint flex justify-center'>
            <div className='container'>
                <p className='text-3xl font-bold text-header capitalize'>
                    Sign Up
                </p>
            </div>
        </div>

        <form className='container h-[72vh] flex items-center justify-center'>
            <div className='grid gap-4 border  p-[10vh] shadow-xl'>
                <div className='grid gap-2'>
                    <div className='flex flex-col justify-center align-middle items-center mb-8 gap-2'>
                        <label className='text-2xl font-bold capitalize'>Sign Up</label>
                        <p className='opacity-50'>Please signup to create an account.</p>
                    </div>
                <div className='flex flex-col gap-2'>
                <label>Username</label>
                <input type="username" name='username' className='border outline-none p-1.5 rounded-md ' placeholder='example@example.com'/>
                </div>
                <div className='flex flex-col gap-2'>
                <label>Email</label>
                <input type="email" name='email' className='border outline-none p-1.5 rounded-md ' placeholder='example@example.com'/>
                </div>
                <div className='flex flex-col gap-2'>
                <label>Password</label>
                <input type="password" name='email' className='border outline-none p-1.5 rounded-md ' placeholder='example@example.com'/>
                </div>
                <button type='submit' className=' border rounded-md font-bolt bg-primary text-white p-1.5 disabled:bg-[#84E1BC]'>
                    Login
                </button>
                <p className='opacity-50'>Already have an Account? <Link href='/login'>Login</Link> </p>
                </div>
            </div>
        </form>


    </div>
  )
}
