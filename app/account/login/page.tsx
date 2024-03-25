'use client'

import Navbar from '@/app/components/Navbar';
// login.tsx

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-purple-600">
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="px-6 py-8">
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
                            <p className="text-sm text-gray-600 mt-2">Login to access your account</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input type="email" name="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" onChange={handleChange} />
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:shadow-outline">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
