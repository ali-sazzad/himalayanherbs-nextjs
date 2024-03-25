'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    // FOOTER SECTION  HERE
    <section className={`${styles.footerMenuContainer} pb-5 w-full border-blue-100 border-t`}>
        <div className={`${styles.footerMenu} w-full items-center max-md:gap-2 max-md:flex-col`}>           
            <div className={`mb-16 sm:mb-0`}>
                <div className={`${styles.container} w-full flex flex-wrap gap-0 justify-between`}>
                                    
                    {/* footer image and general footer information here... */}
                    <ul className="px-2 w-full sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3">
                        {/* footer image here */}
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
                        {/* footer general info here ... */}
                        <h5 className="border-gray-950 border-t font-bold text-sm  text-black mt-8 pt-4 text-bold">
                            <p className="pb-2">
                                177/55-59 Harris Street, Sydney NSW 2000, Australia.
                            </p>
                            <p className="pb-2 pt-2">
                                Email us: <br /> <a href="mailto:contactus@himalayanherbs.com.au" className='text-blue-800 underline hover:text-green-700 lg:text-xs'>contact@himalayanherbs.com.au</a>
                            </p>
                            <p className="pb-2 pt-2">
                                <a href="mailto:contactus@himalayanherbs.com.au" className='text-blue-800 underline hover:text-red-500'>Report A Problem</a>
                            </p>
                        </h5>
                    </ul>

                    {/* QUICK LINKS footer section links here */}
                    <ul className="px-4 sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-lg  text-black mb-2 text-bold uppercase">Quick Links</h3>
                        
                        <h5 className=" font-medium text-sm  text-black mt-4">
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
                                <Link href='/contact' className='text-blue-800 hover:underline hover:text-green-700'>
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

                    {/* DISCOVER footer section  links here */}
                    <ul className="px-4 sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-lg  text-black mb-2 text-bold uppercase">Discover</h3>
                        
                        <h5 className=" font-medium text-sm  text-black mt-4">
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Team
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our History
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href='/contact' className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Brands
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Sponsors
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Partners
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Traders
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Product Suppliers
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Our Manufacturers
                                </Link>
                            </p>
                        </h5>
                    </ul>

                    {/* The COMPANY footer section links here */}
                    <ul className="px-4 sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-lg  text-black mb-2 text-bold uppercase">Company</h3>
                        
                        <h5 className=" font-medium text-sm  text-black mt-4">
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Franchisee
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Branches
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href='/' className='text-blue-800 hover:underline hover:text-green-700'>
                                    Podcast
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Careers
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    The Company
                                </Link>
                            </p>
                        </h5>
                    </ul>
                    
                    {/* FIND US ON footer section links here */}
                    <ul className="px-4 sm:w-1/2 lg:w-1/5 pb-6 pt-6 lg:pt-3 ">
                        <h3 className="font-bold text-lg  text-black mb-2 text-bold uppercase">Find us on</h3>
                        
                        <h5 className=" font-medium text-sm  text-black mt-4">
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Facebook
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Twitter
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href='/' className='text-blue-800 hover:underline hover:text-green-700'>
                                    Instagram
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    TikTok
                                </Link>
                            </p>
                            <p className="mb-2 mt-4">
                                <Link href={'/'} className='text-blue-800 hover:underline hover:text-green-700'>
                                    Youtube
                                </Link>
                            </p>
                        </h5>
                    </ul>
                </div>
            </div>
            <div className='mx-2 border-gray-500 border-t flex flex-row gap-10'>
                {/* copyright info */}
                <p className='pt-4'>
                    &copy;himalayan herbs 2024. All Rights Reserved
                </p>
                <p className='pt-4'>
                    Made with love by:  
                    <a href="https://github.com/SazzGitHub/SazzGitHub" target='_blank' className='text-blue-500'>
                        Sazzad ALI
                    </a>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer