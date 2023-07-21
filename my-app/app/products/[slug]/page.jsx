'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BsFillCartPlusFill } from 'react-icons/bs'
import Image from 'next/image'
import Spinner from '@/components/Spinner'
import Link from 'next/link'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

export default function Page({ params }) {
    const [product, setProduct] = useState([])
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.slug}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false)
            });
    }, []);
    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div className='py-24 bg-primary-tint flex justify-center'>
                <div className='container'>
                    <p className='text-3xl font-bold text-header capitalize'>
                        {
                            loading
                                ?
                                <span> Loading... </span>
                                :
                                product.title
                        }
                    </p>
                    <p>
                        <Link href='/'> Home </Link>  &gt; <Link href='/products'>Products</Link>    &gt; sidebar
                    </p>
                </div>
            </div>
            {
                loading
                    ?
                    <div className='min-h-[60vh] col-span-3 w-full flex justify-center items-center'>
                        <Spinner />
                        <p>Loading</p>
                    </div>

                    :
                    <div className='container grid justify-center m-8'>
                        <div className='flex flex-col md:gap-8 gap-4 p-2 md:flex-row items-center min-h-[500px] md:min-w-[900px] md:justify-center align-middle text-left rounded-md shadow-xl'>
                            <Image src={product.image} className='' alt='Product Image' height={200} width={200} />
                            {/* <div className='md:text-left grid gap-4 text-left max-w-[300px]'>
                    <div>
                        <p className='mb-2 text-2xl font-bold  text-gray-900'>{product.title}</p>
                        <p>Price: $ {product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                    </div>
                    <div>
                    <BsFillCartPlusFill className='text-4xl'/>
                    </div>
                </div> */}
                            <div className='md:text-left grid gap-4 text-left max-w-[300px]'>
                                <div>
                                    <div>
                                        <p className='mb-2 text-2xl font-bold  text-gray-900'>{product.title}</p>
                                        <p><span className='font-bold text-secondary'>Price: $</span> {product.price}</p>
                                    </div>     {product.category && (
                                        <p><span className='font-bold text-secondary'>Category: </span> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                                    )}
                                    <div>
                                        <span className='font-bold text-secondary'>Description: </span>

                                        <div className='flex-1'>
                                            {expanded ? (
                                                <div >
                                                    {product.description}
                                                </div>
                                            ) : (
                                                <div >
                                                    {product.description?.slice(0, 70)} <span className='text-lg'>...</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className='self-end'>
                                            {/* see more toggle */}
                                            {!expanded ? (
                                                <span className='cursor-pointer text-secondary' onClick={toggleDescription}>
                                                    See More
                                                </span>
                                            ) : (
                                                <span className='cursor-pointer text-secondary' onClick={toggleDescription}>
                                                    See Less
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {!expanded && <div className='flex flex-col gap-2'>
                                    <div>
                                        <h1 className='font-bold text-LG'>ADD TO CART</h1>
                                    </div>
                                    <div className='flex items-center gap-8'>
                                        <div className=' p-1 cursor-pointer bg-secondary bg-opacity-50 text-lg hover:bg-opacity-100 hover:text-white'>
                                            <RiAddLine />
                                        </div>
                                        <div>
                                            <BsFillCartPlusFill className='text-3xl' />
                                        </div>
                                        <div className=' p-1 cursor-pointer bg-secondary bg-opacity-50 text-lg hover:bg-opacity-100 hover:text-white'>
                                            <RiSubtractLine />
                                        </div>
                                    </div>

                                </div>
                        }
                        </div>

                    </div>
                </div>
            }
        </div>        
    )
}
