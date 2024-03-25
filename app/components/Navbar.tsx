'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { RiLeafFill,  RiStackFill, RiMegaphoneFill, RiEraserFill} from '@remixicon/react';


function Navbar() {
  return (
        <nav className="relative bg-sky-50 border-0 border-b-2 border-gray-300 text-green-950">
            <div className={`${styles.container} max-auto flex max-md:flex-col justify-between`}>
                
                {/* company logo/name is here ... */}
                <div className="relative block py-4 text-green-950 font-bold">
                    <Link href="/" className="text-3xl hover:text-lime-900">
                        himalayan herbs
                    </Link>
                </div>

                {/* This is a middle menu list */}
                <ul className="flex">
                    {/* home */}
                    <li className="hover:bg-lime-50">
                        <Link href="/" className="font-bold relative block py-6 px-2 text-sm lg:text-base">
                            Home
                        </Link>
                    </li>
                    {/* about */}
                    <li className="hover:bg-lime-50">
                        <Link href="#about" className="font-bold relative block py-6 px-2 text-sm lg:text-base">
                            About
                        </Link>
                    </li>

                   {/* here hoverable products links */}
                    <li className={`${styles.hoverLinks} hover:bg-lime-50`}>
                    <a href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-lime-50">Products</a>
                        <div className={`p-6 ${styles.megaMenu} mb-16 sm:mb-0 shadow-xl bg-lime-50`}>
                            <div className={`${styles.container} max-auto w-full flex flex-wrap justify-between mx-2`}>
                                
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                                    <h3 className="font-bold text-xl  text-black mb-2 text-bold">MEDICINAL HERBS</h3>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Healing Properties</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Herbal Remedies</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Common Ailments</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Aromatherapy Uses</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Herbal Infusions</a>
                                    </li>
                                </ul>

                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                                    <h3 className="font-bold text-xl  text-black mb-2 text-bold">CULINARY HERBS</h3>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Cooking Essentials</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Popular Recipes</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Custom Blends</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Seasonal Mixes</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Herbal Infusions</a>
                                    </li>                           
                                </ul>

                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 ">
                                    <h3 className="font-bold text-xl  text-black mb-2 text-bold">ORGANIC HERBS</h3>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Spicy Selections</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Global Spice Blends</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Herbal Tea Blends</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Seed Varieties</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Certified Organic Options</a>
                                    </li>                              
                                </ul>

                                {/* video att here... */}
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 pb-6 pt-6 lg:pt-3">
                                    <h3 className="font-bold text-xl  text-black mb-2 text-bold">HERBS EDUCATION
                                    </h3>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Gardening Tips</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-200 hover:text-green-900">Herbal Workshops</a>
                                    </li>
                                    <li className="pt-3">
                                        <video height="300" width="300" src="/Presentation1.mp4" autoPlay muted loop className="p-3 border-none rounded-xl shadow-xl"></video> 
                                    </li>                  
                                </ul>

                            </div>
                        </div>
                    </li>

                    {/* This is regular links 'contact us' hidden for smaller screen/mobile version */}
                    <li className="hover:bg-lime-50 max-lg:hidden">
                        <Link href="/" className="font-bold relative block py-6 px-2 text-sm lg:text-base">Contact</Link>
                    </li>
                </ul>

                {/* here more links with 'contact us' and 'profile' icons */}
                <ul className='flex'>
                    {/* here hoverable mega-menu links */}
                    <li className={`${styles.hoverLinks} hover:bg-lime-50`}>
                        <Link href="#" className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-lime-50">
                            More
                        </Link>
                        <div className={`p-6 ${styles.megaMenu} mb-100 sm:mb-0 shadow-xl bg-lime-50`}>
                            <div className={`${styles.container} mx-auto w-full flex flex-wrap justify-between`}>
                                {/* hoverable mega-menu section title here */}
                                <div className="w-full text-green-900 mb-8 text-center">
                                <h2 className="font-bold text-2xl">
                                    "Navigate Nature's Bounty: Explore Our Himalayan Herb Collections."
                                </h2>
                                <p className=" text-xl">
                                    "Discover the Essence of Wellness and Culinary Mastery in Every Herb."
                                </p>
                                </div>

                                {/* other menu items starts here  */}
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                        <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
                                    </svg>
                                    <h3 className="font-bold text-xl text-black text-bold mb-2">Shop by Category</h3>
                                </div>
                                <p className="text-sm text-justify">
                                    Explore our extensive range of Himalayan herbs, categorized for easy navigation. From culinary delights to wellness essentials, find what you need with ease.
                                </p>
                                <div className="flex items-center py-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                        <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                    </svg>
                                    <a href="#" className="text-blue-900 bold border-b-2 border-blue-900 hover:text-blue-500">
                                        Find out more...
                                    </a>
                                </div>
                                </ul>
                            
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z"></path>
                                        </svg>
                                        <h3 className="font-bold text-xl text-black text-bold mb-2">Exclusive Bundles</h3>
                                    </div>
                                    <p className="text-sm text-justify">
                                        Discover curated bundles of Himalayan herbs for a holistic experience. Handpicked combinations for culinary mastery, wellness, and more.
                                    </p>
                                    <div className="flex items-center py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                        </svg>
                                        <a href="#" className="text-blue-900 bold border-b-2 border-blue-900 hover:text-blue-500">
                                            Find out more...
                                        </a>
                                    </div>
                                </ul>
                            
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-b sm:border-r lg:border-r lg:border-b-0 md:border-b pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22"><path d="M21 10.063V4C21 3.44772 20.5523 3 20 3H19C17.0214 4.97864 13.3027 6.08728 11 6.61281V17.3872C13.3027 17.9127 17.0214 19.0214 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12 22.5 11.0681 21.8626 10.285 21 10.063ZM5 7C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V7H5Z"></path></svg>
                                        <h3 className="font-bold text-xl text-black text-bold mb-2">Seasonal Specials</h3>
                                    </div>
                                    <p className="text-sm text-justify">
                                        Embrace the flavors of each season with our curated collection of seasonal Himalayan herbs. Limited-time offerings for a fresh culinary experience.
                                    </p>
                                    <div className="flex items-center py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                        </svg>
                                        <a href="#" className="text-blue-900 bold border-b-2 border-blue-900 hover:text-blue-500">
                                            Find out more...
                                        </a>
                                    </div>
                                </ul>
                                
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-b lg:border-r-0 lg:border-b-0 border-green-50 pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M13.9999 18.9966H20.9999V20.9966H11.9999L8.00229 20.9991L1.51457 14.5113C1.12405 14.1208 1.12405 13.4877 1.51457 13.0971L12.1212 2.49053C12.5117 2.1 13.1449 2.1 13.5354 2.49053L21.3136 10.2687C21.7041 10.6592 21.7041 11.2924 21.3136 11.6829L13.9999 18.9966ZM15.6567 14.5113L19.1922 10.9758L12.8283 4.61185L9.29275 8.14738L15.6567 14.5113Z"></path>
                                        </svg>
                                        <h3 className="font-bold text-xl text-black text-bold mb-2">Herbal Remedies</h3>
                                    </div>
                                    <p className="text-sm text-justify">
                                        Unlock the power of nature with our herbal remedies collection. From ancient healing herbs to modern wellness essentials, explore a natural path to well-being.
                                    </p>
                                    <div className="flex items-center py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                        </svg>
                                        <a href="#" className="text-blue-900 bold border-b-2 border-blue-900 hover:text-blue-500">
                                            Find out more...
                                        </a>
                                    </div>
                                </ul>

                                {/* other menu items ends here */}

                                {/* contact us section here | hidden for large screens */}
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-b md:border-b-0 sm:border-r items-center border-green-50 pb-6 pt-6 lg:pt-3 lg:hidden">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
                                        </svg>
                                        <h3 className="font-bold text-xl text-black text-bold mb-2">Contact Us</h3>
                                    </div>
                                    <p className="text-sm text-justify">
                                        Have questions or just want to say hello? We're here! Contact us anytime for inquiries about our products, orders, or simply to share your Himalayan herbs experience.
                                    </p>
                                    <div className="flex items-center py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
                                        </svg>
                                        <a href="#contact" className="text-blue-900 bold border-b-2 border-blue-900 hover:text-blue-500">
                                            Fill out this form.
                                        </a>
                                    </div>
                                </ul>

                                {/* user profile/login section here | hidden for large screens */}
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 items-center border-green-50 pb-6 pt-6 lg:pt-3 lg:hidden">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                                        </svg>
                                        <h3 className="font-bold text-xl text-black text-bold mb-2">Account Center</h3>
                                    </div>
                                    <p className="text-sm text-justify">
                                        Easily create an account with us and become a member to receive daily discounts on majority of our products.
                                    </p>
                                    <div className="flex items-center flex-col py-3">
                                        Don't have an Account yet? No worries! You can create one here.
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22">
                                            <path d="M10 11H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V13H10V16L15 12L10 8V11Z"></path>
                                        </svg>                    
                                        <Link href="/account" className="text-blue-900 bold border-b-2 border-blue-900 hover:text-blue-500">
                                            Go to Account
                                        </Link>
                                    </div>
                                </ul>                      
                            </div>
                        </div>                     
                    </li>

                    {/* search link  */}
                    <li className={`${styles.megaSearch} font-bold relative py-6 px-4 text-sm lg:text-base flex justify-center items-center`}>
                        <a href="/" className="hover:text-lime-700">
                            Search &nbsp;
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(54,83,20,1)"  width="22" height="22"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>         
                    </li>          

                    {/* cart link */}
                    <li className="font-bold relative py-6 px-4 text-sm lg:text-base flex justify-center items-center">
                        <a href="/" className="hover:text-lime-700">
                            Cart &nbsp;
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(54,83,20,1)"><path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H9ZM7 6H4C3.44772 6 3 6.44772 3 7V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V7C21 6.44772 20.5523 6 20 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6ZM9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10H17C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10H9Z"></path></svg>
                    </li>

                    {/* Profile icon hidden for a mobile/smaller screen view  */}
                    <li className="font-bold relative py-6 px-4 text-sm lg:text-base flex justify-center items-center max-lg:hidden">
                        <Link href="/account" className="hover:text-lime-700">
                            Account &nbsp;
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(54,83,20,1)">
                            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
                        </svg>
                    </li>
                </ul>
                
            </div>
        </nav>
  )
}

export default Navbar;