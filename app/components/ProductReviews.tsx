'use client'

import Image from 'next/image';
import { useState } from 'react';
import { RiStarFill } from '@remixicon/react';

const ProductReviews = () => {
    // Sample product data with additional descriptions and reviews
    
    const products = [
        {
            id: 1,
            name: 'Organic Ginger',
            price: 99.99,
            imageUrl: '/productReview/product1.webp',
            rating: 4.5,
            description: 'A spicy root known for its medicinal properties, often used in teas and cooking for its distinct flavor and aroma.',
            review: "Love it! Daily staple, exceeded expectations, elevates dishes, amazing quality and freshness.",
        },
        {
            id: 2,
            name: 'Indian Masala Mix',
            price: 49.99,
            imageUrl: '/productReview/product2.webp',
            rating: 3.8,
            description: 'A blend of aromatic spices used in Indian cuisine, adding depth and complexity to dishes like curries and biryanis.',
            review: "Top-notch product, fantastic customer service, incredible value, highly recommend.",
        },
        {
            id: 3,
            name: 'Asian Masala',
            price: 79.99,
            imageUrl: '/productReview/product3.png',
            rating: 4.2, // Rating out of 5
            description: 'A versatile seasoning blend popular in Asian cooking, featuring a harmonious mix of spices that enhance the flavor of stir-fries, soups, and noodles.',
            review: "Fresh herbs, excellent taste, great value, outstanding quality, fast delivery, highly recommended.",
        },
        {
            id: 4,
            name: 'Dried Red Seeds',
            price: 149.99,
            imageUrl: '/productReview/product4.jpg',
            rating: 4.7, // Rating out of 5
            description: 'Small, fiery seeds prized for their intense heat and vibrant red color, commonly used to add spice and color to dishes from around the world.',
            review: "Exceptional quality, delicious flavor, affordable price, exceeded expectations, will buy again, highly recommend.",
        },
        {
            id: 5,
            name: 'Chilly and Thyme',
            price: 29.99,
            imageUrl: '/productReview/product5.jpg',
            rating: 3.5, // Rating out of 5
            description: 'A zesty combination of dried chilies and fragrant thyme, perfect for adding a kick of heat and a burst of flavor to meats, vegetables, and sauces.',
            review: "Impressed by freshness, great customer service, exceeded expectations, affordable price, highly recommend.",
        },
        {
            id: 6,
            name: 'Sage',
            price: 79.99,
            imageUrl: '/productReview/product6.webp',
            rating: 4.2, // Rating out of 5
            description: 'A savory herb with a slightly peppery flavor and earthy aroma, often used to season meats, stuffings, and soups for a warm, comforting taste.',
            review: "Outstanding product, exceptional flavor, prompt delivery, affordable price, highly recommend, exceeded expectations.",
        }
    ];

    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleProductClick = (productId) => {
        setSelectedProductId(selectedProductId === productId ? null : productId);
    };

    return (
        <section id='product-reviews' className='my-12 pb-10 border-b px-4 lg:px-6'>
            <h3 className="text-5xl max-md:text-3xl text-center lg:text-7xl font-bold mb-7 ">Product Reviews</h3>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {products.map((product) => (
                    <div key={product.id} className='row-span-1 relative'>
                        <div className='relative'>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                layout='responsive'
                                width={300}
                                height={300}
                                className='rounded-lg transform transition-transform duration-500 hover:scale-105'
                                onClick={() => handleProductClick(product.id)}
                            />
                            <div className='absolute top-0 right-0 p-2 text-center bg-blue-100 rounded-bl-lg'>
                                <RiStarFill className='h-7 w-10 text-green-600' />
                                <span className='text-lg font-semibold'>{product.rating}</span>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-2xl text-blue-950 font-semibold'>{product.name}</h3>
                            <p className='text-2xl text-green-800 font-bold'>${product.price.toFixed(2)}</p>
                            {/* <p className='text-md text-justify'>{product.description}</p> */}
                        </div>
                            {selectedProductId === product.id && (
                                <div className=' top-0 z-50 left-0 w-full h-fit bg-blue-200 text-blue-900 p-4 flex flex-col justify-center rounded-b-lg'>
                                    <h3 className="text-lg font-semibold mb-2"> {product.rating} out of 5</h3>
                                    <p className="font-bold text-lg text-left mb-2">Most Recent Review: </p>
                                    <p className="font-normal text-md">{product.review}</p>
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductReviews;