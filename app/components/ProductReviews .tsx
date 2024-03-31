import Image from 'next/image';
import { RiStarFill, RiStarHalfFill, RiStarLine } from '@remixicon/react';

const ProductReviews = () => {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 99.99,
            imageUrl: '/productReview/product1.webp',
            rating: 4.5, // Rating out of 5
        },
        {
            id: 2,
            name: 'Product 2',
            price: 49.99,
            imageUrl: '/productReview/product2.webp',
            rating: 3.8, // Rating out of 5
        },
        {
            id: 3,
            name: 'Product 3',
            price: 79.99,
            imageUrl: '/productReview/product3.png',
            rating: 4.2, // Rating out of 5
        },
        {
            id: 4,
            name: 'Product 4',
            price: 149.99,
            imageUrl: '/productReview/product4.jpg',
            rating: 4.7, // Rating out of 5
        },
        {
            id: 5,
            name: 'Product 5',
            price: 29.99,
            imageUrl: '/productReview/product5.jpg',
            rating: 3.5, // Rating out of 5
        },
    ];

    return (
        <section id='product-reviews' className='my-12 pb-10 border-b px-4 lg:px-6'>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {products.map((product) => (
                    <div key={product.id} className='row-span-1'>
                        <div className='relative'>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                layout='responsive'
                                width={300}
                                height={300}
                                className='rounded-lg'
                            />
                            <div className='absolute top-0 right-0 p-2 bg-white rounded-bl-lg'>
                                <RiStarFill className='h-5 w-5 text-green-400' />
                                <span className='text-sm font-semibold'>{product.rating}</span>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-lg font-semibold'>{product.name}</h3>
                            <p className='text-gray-600'>${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductReviews;