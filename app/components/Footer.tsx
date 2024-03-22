import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    // FOOTER SECTION  HERE
    <section className={`${styles.footerMenuContainer} bg-gray-200 pb-5 px-[120px] max-lg:px-[120px]`}>
        <div className={`${styles.footerMenu} w-full items-center max-md:gap-10 max-md:flex-col`}>
            
            <div className={`p-6 ${styles.megaMenu} mb-16 sm:mb-0 shadow-xl bg-lime-50`}>
                <div className={`${styles.container} max-auto w-full flex flex-wrap justify-between mx-2`}>
                                    
                    {/* footer image here... */}
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 pb-6 pt-6 lg:pt-3">
                        <h3 className="font-bold text-xl  text-black mb-2 text-bold">HERBS EDUCATION
                        </h3>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Gardening Tips</a>
                        </li>
                        <li>
                            <a href="#" className="block text-lg p-3 text-blue-900 hover:bg-lime-50 hover:text-green-900">Herbal Workshops</a>
                        </li>
                        <li className="pt-3">
                            <video height="300" width="300" alt="https://www.vecteezy.com/video/8192251-small-tree-growing-it-has-been-planted-and-watered-well small tree growing It has been planted and watered well. Stock Videos by Vecteezy" src="./public/images/Presentation1.mp4" autoplay mute loop className="p-3 border-none rounded-xl shadow-xl"></video> 
                        </li>                  
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
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

                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
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

                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-green-50 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3 ">
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
        </div>
    </section>
  )
}

export default Footer