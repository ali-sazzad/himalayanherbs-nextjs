'use client'

import { useState } from 'react';
import Image from 'next/image';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import Link from 'next/link';

const FeatureProductSection = () => {
    const images = ['/featuredProducts/feature-herbs1.png', '/featuredProducts/feature-herbs2.png', '/featuredProducts/feature-herbs3.png', '/featuredProducts/feature-herbs4.png', '/featuredProducts/feature-herbs5.png']; // Add more image URLs as needed
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const products = [
        { name: 'Nepalese Tomato', price: '99.99/kg' },
        { name: 'English Thyme', price: '9.99/pc' },
        { name: 'Italian Basil', price: '14.99/kg' },
        { name: 'French Parsley', price: '7.99/pc' },
        { name: 'Spanish Rosemary', price: '12.99/kg' }
    ];

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        
        <section className="my-12 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <h3 className="text-5xl max-md:text-3xl max-md:text-center lg:text-7xl font-bold ">Featured Product</h3>
                    <div className="flex items-center justify-center px-4 mt-10">
                        {/* Left arrow button */}
                        <button
                            className={`h-fit bg-blue-100 rounded-md ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={handlePrevImage}
                            disabled={currentImageIndex === 0}
                        >
                            <RiArrowLeftSLine size={35} color="grey" />
                        </button>
                        {/* Display current image */}
                        <div className="flex flex-row max-md:flex-row gap-6 items-center justify-center w-full mb-4 p-8">
                            <div className=''>
                                <Link href="/product">
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt={`feature-herbs${currentImageIndex + 1} image`}
                                        height="300"
                                        width="400"
                                        quality={100}
                                        className="hover:drop-shadow-2xl hover:scale-105 hover:rounded-lg"
                                    />
                                </Link>
                                <div className="flex flex-col lg:flex-row justify-between w-full mt-2">
                                    <h3 className="text-lg lg:text-xl font-medium">{products[currentImageIndex].name}</h3>
                                    <p className="text-green-800 font-bold">{products[currentImageIndex].price}</p>
                                </div>
                            </div>
                            <div className=''>
                                <Link href="/product">
                                    <Image
                                        src={images[currentImageIndex + 1 < images.length ? currentImageIndex + 1 : 0]}
                                        alt={`feature-herbs${currentImageIndex + 2 > images.length ? 1 : currentImageIndex + 2} image`}
                                        height="300"
                                        width="400"
                                        quality={100}
                                        className="hover:drop-shadow-2xl hover:scale-105 hover:rounded-lg"
                                    />
                                </Link>
                                <div className="flex flex-col lg:flex-row justify-between w-full mt-2">
                                    <h3 className="text-lg lg:text-xl font-medium">{products[currentImageIndex + 1 < images.length ? currentImageIndex + 1 : 0].name}</h3>
                                    <p className="text-green-800 font-bold">{products[currentImageIndex + 1 < images.length ? currentImageIndex + 1 : 0].price}</p>
                                </div>
                            </div>
                        </div>
                        {/* Right arrow button */}
                        <button
                            className="h-fit bg-blue-100 rounded-md cursor-pointer"
                            onClick={handleNextImage}
                        >
                            <RiArrowRightSLine size={35} color="black" />
                        </button>
                    </div>
                    {/* Display other images as a gallery */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4 ">
                        {images.map((image, index) => (
                            index !== currentImageIndex && (
                                <div key={index} className="p-4 flex flex-col items-center">
                                    <Link href="/product">
                                        <Image
                                            src={image}
                                            alt={`feature-herbs${index + 1} image`}
                                            height="100"
                                            width="300"
                                            quality={100}
                                            className="hover:drop-shadow-2xl hover:scale-105 hover:rounded-lg"
                                        />
                                    </Link>
                                    <div className="flex flex-col lg:flex-row justify-between w-full mt-2">
                                        <h3 className="text-lg lg:text-xl font-medium">{products[index].name}</h3>
                                        <p className="text-green-800 font-bold">{products[index].price}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureProductSection;