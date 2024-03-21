'use client';
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css';


function Navbar() {
  return (
        <nav className="relative bg-sky-50 border-0 border-gray-300 text-green-950">
            <div className={`${styles.container} max-auto flex max-md:flex-col justify-between`}>
                
                {/* company logo/name is here ... */}
                <div className="relative block p-4 text-lime-950 font-bold">
                    <Link href="/" className="text-3xl hover:text-green-200">
                        himalayan herbs
                    </Link>
                </div>

                {/* This is a middle menu list */}
                <ul className="flex">
                    <li className="hover:bg-lime-200">
                        <Link href="/" className="font-bold relative block py-6 px-2 text-sm lg:text-base">
                            Home
                        </Link>
                    </li>
                    <li className="hover:bg-lime-200">
                        <Link href="#about" className="font-bold relative block py-6 px-2 text-sm lg:text-base">
                            About
                        </Link>
                    </li>

                   {/* here toggle/clickable links */}
                    <li className={`${styles.toggle} hover:bg-lime-200`}>
                    <input type="checkbox" value="selected" id="toggleLink" className={styles.toggleInput} />
                    <label htmlFor="toggleLink" className="cursor-pointer py-6 block px-4 text-sm lg:text-base font-bold">Products</label>
                    <div role="toggle" className={`p-6 ${styles.megaMenu} mb-16 sm:mb-0 shadow-xl bg-lime-200`}>
                        <div className={`${styles.container} max-auto w-full flex flex-wrap justify-between mx-2`}>
                            
                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-500 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                                <h3 className="font-bold text-xl  text-black mb-2 text-bold">MEDICINAL HERBS</h3>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Healling Properties</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Herbbal Remedies</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Commmon Ailments</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Arommatherapy Uses</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Herbbal Infusions</a>
                                </li>
                            </ul>

                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-500 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                                <h3 className="font-bold text-xl  text-black mb-2 text-bold">CULINARY HERBS</h3>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Cookking Essentials</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Popuular Recipes</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Custtom Blends</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Seassonal Mixes</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Herbbal Infusions</a>
                                </li>                           
                            </ul>

                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-500 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 ">
                                <h3 className="font-bold text-xl  text-black mb-2 text-bold">ORGANIC HERBS</h3>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Spiccy Selections</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Globbal Spice Blends</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Herbbal Tea Blends</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Seed Varieties</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Certified Organic Options</a>
                                </li>                              
                            </ul>

                            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-500 pb-6 pt-6 lg:pt-3">
                                <h3 className="font-bold text-xl  text-black mb-2 text-bold">HERBS EDUCATION
                                </h3>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Garddening Tips</a>
                                </li>
                                <li>
                                    <a href="#" className="block p-3 text-blue-900 hover:bg-lime-200 hover:text-green-500">Herbbal Workshops</a>
                                </li>
                                <li className="pt-3">
                                    <video height="300" width="300" alt="https://www.vecteezy.com/video/8192251-small-tree-growing-it-has-been-planted-and-watered-well small tree growing It has been planted and watered well. Stock Videos by Vecteezy" src="../public/images/Presentation1.mp4" autoplay mute loop className="p-3 border-none rounded-xl shadow-xl"></video> 
                                </li>                  
                            </ul>

                        </div>
                    </div>
                    </li>


                    <li></li>
                </ul>
                
            </div>
        </nav>
  )
}

export default Navbar