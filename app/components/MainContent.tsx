import React from 'react';
import styles from './MainContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

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
                <div className='flex flex-row'>
                    {/* left arrow */}
                    <button>
                        <RiArrowLeftSLine 
                            size={35}
                            color='grey'

                        />
                    </button>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-10'>
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
                                    }}
                                />
                            </Link>
                            <div className='flex flex-row justify-between pt-2'>
                                <h3 className='text-lg font-medium '>Nepalese Tomatoe</h3>
                                <p className='text-green-800 font-bold'>$99.99/kg</p>
                            </div>
                        </div>
                        
                        <div className='mb-4 p-8 flex flex-col'>
                            <Link href={'/product'}>
                                <Image 
                                    src='/feature-herbs2.jpg' 
                                    alt='feature-herbs2 image'
                                    height="50"
                                    width="400"
                                    quality={100}
                                    style={{
                                        border: '1px solid grey',
                                    }}
                                />
                            </Link>
                            <div className='flex flex-row justify-between pt-2'>
                                <h3 className='text-lg font-medium '>English Thyme</h3>
                                <p className='text-green-800 font-bold'>$9.99/pc</p>
                            </div>
                        </div>
                    </div>
                    {/* right arrow */}
                    <button>
                        <RiArrowRightSLine 
                            size={35}
                            color='black'
                            
                        />
                    </button>
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
                <div className='flex flex-row'>
                    {/* left arrow */}
                    <button>
                        <RiArrowLeftSLine 
                            size={35}
                            color='grey'

                        />
                    </button>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mt-10'>
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
                                    }}
                                />
                            </Link>
                            <div className='flex flex-row justify-between pt-2'>
                                <h3 className='text-lg font-medium '>Nepalese Tomatoe</h3>
                                <p className='text-green-800 font-bold'>$99.99/kg</p>
                            </div>
                        </div>
                        
                        <div className='mb-4 p-8 flex flex-col'>
                            <Link href={'/product'}>
                                <Image 
                                    src='/feature-herbs2.jpg' 
                                    alt='feature-herbs2 image'
                                    height="50"
                                    width="400"
                                    quality={100}
                                    style={{
                                        border: '1px solid grey',
                                    }}
                                />
                            </Link>
                            <div className='flex flex-row justify-between pt-2'>
                                <h3 className='text-lg font-medium '>English Thyme</h3>
                                <p className='text-green-800 font-bold'>$9.99/pc</p>
                            </div>
                        </div>
                    </div>
                    {/* right arrow */}
                    <button>
                        <RiArrowRightSLine 
                            size={35}
                            color='black'
                            
                        />
                    </button>
                </div>
            </div>
        </div>
    </section>



    </>

  )
}

export default MainContent