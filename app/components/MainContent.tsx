import React from 'react';
import styles from './MainContent.module.css';
import Image from 'next/image';
import Link from 'next/link';

function MainContent() {
  return (
    // MAIN Content here ...
    <section className='mb-16 py-6'>
        <div className='w-full'>
            <h1 className='text-2xl font-bold text-center'>
                    "Elevate Your Well-being with the Purity of Himalayan Herbs"
            </h1>
            <p className={`${styles.borderBottom}`}>&nbsp; </p>
        </div>
        {/* shop now some products here */}
        <div className='mt-0'>
            <div className='w-full px-28 flex flex-col items-center'>
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
                <div className='flex pt-8'>
                    <Link href={'/product'}>
                        <span className='text-xl py-2 px-8 bg-lime-700 text-lime-50 rounded-sm hover:bg-lime-800'>Shop Now</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>

  )
}

export default MainContent