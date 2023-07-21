import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Single({product}) {
  return (
    <div className='p-2 flex flex-col justify-around align-middle max-w-sm min-h-[500px] max-height-[500px] bg-white border border-gray-200 rounded-lg shadow'>
        <Image src={product.image} className='max-h-[250px]' alt='Product Image' height={200} width={200} />   
        <div className='p-5'>
            <p className='mb-2 text-2xl font-bold  text-gray-900'>{product.title}</p>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'> Price: $ {product.price}</p>
            <Link href={`/products/${product.id}`}>
                <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg '>Veiw Details</button>
            </Link>
        </div>
    </div>
  )
}
