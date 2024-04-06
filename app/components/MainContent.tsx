import React from 'react';
import styles from './MainContent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ProductReviews from './ProductReviews';
import FeatureProductSection from './FeatureProductSection';
import Marquee from "react-fast-marquee";

function MainContent() {
    const sponsors = [
        {
            id: 1,
            imageUrl: '/sponsors/gia leaves.png',
            name: 'gia leaves',
        },
        {
            id: 2,
            imageUrl: '/sponsors/No Leaves.png',
            name: 'No Leaves',
        },
        {
            id: 3,
            imageUrl: '/sponsors/herbal communist.png',
            name: 'herbal communist',
        },
        {
            id: 4,
            imageUrl: '/sponsors/The Herbs.png',
            name: 'The Herbs',
        },
        {
            id: 5,
            imageUrl: '/sponsors/One Leaves.png',
            name: 'One Leaves',
        },
    ];

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
        <FeatureProductSection />
    </section>

    {/* Newsletter subscription section here ... */}
    <section id='newsletter' className='my-12 px-4 lg:px-10'>
        <div className='max-w-6xl mx-auto bg-green-100 rounded-lg shadow-md py-10 px-8 lg:flex lg:items-center'>
            <div className='lg:w-1/2'>
                <h2 className='text-3xl max-md:text-2xl max-md:text-center font-bold text-gray-800 mb-3'>
                    Subscribe to Our Newsletter
                </h2>
                <p className='text-xl max-md:text-md max-md:text-center text-gray-700 mb-3'>
                    Don't miss out on exciting news, product launches, and special promotions. Subscribe now and be part of our community!
                </p>
            </div>
            <div className='lg:w-1/2 lg:pl-8'>
                <form className='flex flex-col lg:flex-row gap-2 items-center lg:items-stretch'>
                    <input type="email" id='signupEmail' name='signupEmail' className='py-3 pl-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 mb-4 lg:mb-0' placeholder='Your Email Address' />
                    
                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg focus:outline-none transition duration-300'>Subscribe</button>
                </form>
            </div>
        </div>
    </section>



    {/* Product reviews section here ... */}
    <section className='my-12 border-blue-100'>
        <ProductReviews />
    </section>

    <section id='about' className='my-12 pb-10 px-4 lg:px-6'>
        <div className='sm:px-28 pb-10 '>
            <h1 className='text-5xl max-md:text-3xl text-center lg:text-7xl font-bold mb-7 '>
                About us
            </h1>
            <h3 className='md:text-center text-justify text-lg text-pretty text-blue-950 tracking-wide leading-loose '>
                At Himalayan Herbs, we're passionate about bringing you the finest quality herbs and spices straight from the heart of the Himalayas. Our journey began with a vision to share the rich cultural heritage and time-honored traditions of the Himalayan region with the world.

                With a commitment to sustainability and ethical sourcing, we work closely with local farmers and communities to ensure that our products are not only of the highest quality but also produced in a way that respects the environment and supports the livelihoods of those who cultivate them.
            </h3>
        </div>
        <h1>
            Some of our brands
        </h1>
        <Marquee>     
            <div className='flex flex-row gap-10 items-center overflow-hidden '>
                {sponsors.map((sponsors) => (
                    <div key={sponsors.id} className='mx-4 items-center '>
                        <Image
                        src={sponsors.imageUrl}
                        alt=' {sponsors.name} '
                        width={400}
                        height={200}
                        />
                    </div>
                ))}
            </div>
        </Marquee>
    </section>


    </>

  )
}

export default MainContent