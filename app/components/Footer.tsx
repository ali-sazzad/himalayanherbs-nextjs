'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    // FOOTER SECTION  HERE
    <section className={`${styles.footerMenuContainer} pb-5 w-full `}>
        <div className={`${styles.footerMenu} w-full items-center max-md:gap-2 max-md:flex-col`}>           
            <div className={`  mb-16 sm:mb-0`}>
                <div className={`${styles.container} max-auto w-full flex flex-wrap gap-0 justify-between mx-2`}>
                                    
                    {/* footer image here... */}
                    <ul className="px-2 w-full sm:w-1/2 lg:w-1/4 border-green-50 pb-6 pt-6 lg:pt-3">
                        <li className="pb-3">
                            <Link href={'/'}>
                                <Image 
                                    src='/footerImage.png' 
                                    alt='hh image'
                                    height="300"
                                    width="500"
                                    quality={100}
                                    style={{
                                        border: '1px solid grey',
                                        borderBottom: "1px solid gray",
                                        // boxShadow: '20px 20px 25px gray',
                                    }}
                                />
                            </Link>
                        </li>
                        <h5 className="border-gray-950 border-t font-bold text-sm  text-black mt-8 pt-4 text-bold">
                            <p className="pb-2">
                                177/55-59 Harris Street, Sydney NSW 2000, Australia.
                            </p>
                            <p className="pb-2 pt-2">
                                Email us: <a href="mailto:contactus@himalayanherbs.com.au" className='text-blue-800 underline hover:text-green-700'>contactus@himalayanherbs.com.au</a>
                            </p>
                            <p className="pb-2 pt-2">
                                <a href="mailto:contactus@himalayanherbs.com.au" className='text-blue-800 underline hover:text-red-500'>Report A Problem</a>
                            </p>
                        </h5>
                    </ul>

                    <ul className="px-2 sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-xl  text-black mb-2 text-bold uppercase">Quick Links</h3>
                        
                        <h5 className=" font-bold text-sm  text-black mt-4 text-bold">
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Ask the Experts
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Blogs
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Contact Us
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    FAQs
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Health Consult
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Loyalty Rewards
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Research Centers
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Store Locations
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Refund Policy
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Terms of product use
                                </Link>
                            </p>
                        </h5>
                    </ul>
                    
                    <ul className="px-2 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-xl  text-black mb-2 text-bold">MEDICINAL HERBS</h3>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Healing Properties</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Herbal Remedies</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Common Ailments</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Aromatherapy Uses</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Herbal Infusions</a>
                        </li>
                    </ul>


                    <ul className="px-2 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-xl  text-black mb-2 text-bold">CULINARY HERBS</h3>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Cooking Essentials</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Popular Recipes</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Custom Blends</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Seasonal Mixes</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Herbal Infusions</a>
                        </li>                           
                    </ul>

                    <ul className="px-2 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-xl  text-black mb-2 text-bold">ORGANIC HERBS</h3>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Spicy Selections</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Global Spice Blends</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Herbal Tea Blends</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Seed Varieties</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Certified Organic Options</a>
                        </li>                              
                    </ul>
                </div>
            </div>
            <div>
                {/* copyright info */}
                <p>
                    &copyright 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer