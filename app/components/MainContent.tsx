import React from 'react';
import styles from './MainContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import ProductReviews from './ProductReviews ';

function MainContent() {
    
  return (
    // MAIN Content here ...
    <>
    {/* hero section here ... */}
    <section className='my-12 py-6 border-blue-100 border-b'>
        {/* Hero Title here */}
        <div className='w-full'>
            <h1 className='md:text-3xl text-lg  font-bold text-center'>
                    "Elevate Your Well-being with the Purity of Himalayan Herbs"
            </h1>
            <p className={`${styles.borderBottom}`}>&nbsp; </p>
        </div>

        {/* hero products here */}
        <div className='mt-0'>
            <div className='w-full px-28 flex flex-col items-center'>

                {/* 3 hero images here */}
                <ul className='flex justify-center flex-col gap-10 md:flex-row'>
                    <li className=''>
                        <Link href={'/product'}>
                            <Image 
                                src='/herbs1.jpeg' 
                                alt='herbs1 image'
                                height="100"
                                width="300"
                                quality={100}
                                style={{
                                    border: '1px solid grey',
                                }}
                            />
                        </Link>
                    </li>
                    <li className=''>
                        <Link href={'/product'}>
                            <Image 
                                src='/herbs2.jpeg' 
                                alt='herbs1 image'
                                height="100"
                                width="300"
                                quality={100}
                                style={{
                                    border: '1px solid grey',
                                }}
                            />
                        </Link>
                    </li>
                    <li className=''>
                        <Link href={'/product'}>
                            <Image 
                                src='/herbs3.jpeg' 
                                alt='herbs1 image'
                                height="100"
                                width="300"
                                quality={100}
                                style={{
                                    border: '1px solid grey',
                                }}
                            />
                        </Link>
                    </li>
                </ul>

                {/* Shop Now Button here */}
                <div className='flex pt-8 pb-6'>
                    <Link href={'/product'}>
                        <span className='text-xl py-2 px-8 bg-lime-700 text-lime-50 rounded-sm hover:bg-lime-800'>Shop Now</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    {/* feature product section here ... */}
    <section className='my-12 pb-10 border-blue-100 border-b'>
        <div className='mt-0'>
            <div className='flex flex-col items-center'>
                <h3 className='text-5xl'>
                    Featured Product
                </h3>
                <div className='flex flex-row items-center px-4'>
                    {/* left arrow */}
                    <button className=' h-fit bg-blue-100 rounded-md disabled cursor-not-allowed'>
                        <RiArrowLeftSLine 
                            size={35}
                            color='grey'

                        />
                    </button>
                    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-0 mt-10'>
                        {/* feature product 1 */}
                        <div className='mb-4 p-8 flex flex-col'>
                            <Link href={'/product'}>
                                <Image 
                                    src='/feature-herbs1.jpg' 
                                    alt='feature-herbs1 image'
                                    height="40"
                                    width="400"
                                    quality={100}
                                    style={{
                                        border: '1px solid grey',
                                        transition: 'all .5s ease-in-out',
                                    }}
                                    className='hover:drop-shadow-2xl hover:scale-105 hover:rounded-lg'
                                />
                            </Link>
                            <div className='flex flex-col md:flex-row justify-between pt-2'>
                                <h3 className='text-lg font-medium '>Nepalese Tomatoe</h3>
                                <p className='text-green-800 font-bold'>$99.99/kg</p>
                            </div>
                        </div>
                        
                        <div className='mb-4 p-8 flex flex-col'>
                            <Link href={'/product'}>
                                <Image 
                                    src='/feature-herbs2.jpg' 
                                    alt='feature-herbs2 image'
                                    height="40"
                                    width="400"
                                    quality={100}
                                    style={{
                                        border: '1px solid grey',
                                        transition: 'all .5s ease-in-out',
                                    }}
                                    className='hover:drop-shadow-2xl hover:scale-105 hover:rounded-lg'
                                />
                            </Link>
                            <div className='flex flex-col md:flex-row justify-between pt-2'>
                                <h3 className='text-lg font-medium '>English Thyme</h3>
                                <p className='text-green-800 font-bold'>$9.99/pc</p>
                            </div>
                        </div>
                    </div>
                    {/* right arrow */}
                    <button className=' h-fit bg-blue-300 rounded-md disabled cursor-pointer'>
                        <RiArrowRightSLine 
                            size={35}
                            color='black'
                            
                        />
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* Newsletter subscription section here ... */}
    <section id='newsletter' className='my-12 px-4 lg:px-10'>
    <div className='max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md py-10 px-8 lg:flex lg:items-center'>
        <div className='lg:w-1/2'>
            <h2 className='text-3xl max-md:text-2xl max-md:text-center font-bold text-gray-800 mb-3'>
                Subscribe to Our Newsletter
            </h2>
            <p className='text-xl max-md:text-lg max-md:text-center text-gray-700 mb-3'>
                Don't miss out on exciting news, product launches, and special promotions. Subscribe now and be part of our community!
            </p>
        </div>
        <div className='lg:w-1/2 lg:pl-8'>
            <form className='flex flex-col lg:flex-row items-center lg:items-stretch'>
                <input type="email" id='signupEmail' name='signupEmail' className='py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 mb-4 lg:mb-0' placeholder='Your Email Address' />
                <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none transition duration-300'>Subscribe</button>
            </form>
        </div>
    </div>
</section>



    {/* Product reviews section here ... */}
    <section className='my-12 pb-10 border-blue-100 border-b'>
        <ProductReviews />
    </section>



    </>

  )
}

export default MainContent