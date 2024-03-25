'use client'

import React from 'react';
import Navbar from '../components/Navbar';

const Account = () => {
  return (
    <>
        <Navbar />

        <h1 className='text-center my-8 text-3xl text-lime-950  '>
            Have an Account with himalayan herbs?
        </h1>

        <div className='flex flex-col justify-center items-center'>
            <div className='max-w-screen-xl flex flex-col lg:flex-row justify-center items-center gap-8 my-4 '>

                {/* here login item */}
                <div className='flex flex-col w-full bg-white p-8 rounded-lg shadow-xl '>
                    <h2 className='text-3xl font-bold text-gray-800 mb-4 lg:text-center '>
                        Login to your Account
                    </h2>
                    <form className="space-y-4 ">
                        <div className='flex flex-col '>
                            <label htmlFor="loginEmail" className='text-sm font-semibold text-gray-700 '>Email Address</label>
                            <input type="email" id='loginEmail' name='loginEmail' className='py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-600 ' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="loginPassword" className='text-sm font-semibold text-gray-700 '>Password</label>
                            <input type="password" id='loginPassword' name='loginPassword' className='py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-600 ' placeholder='Enter your password' />
                        </div>
                        <button type='submit' className='w-full text-xl font-semibold py-2 px-4 bg-lime-500 text-green-950 rounded-lg hover:bg-lime-600 focus:outline-none focus:bg-lime-600 '>Login</button>
                    </form>
                </div>

                <h2 className='text-4xl font-bold text-lime-900 '>
                    OR
                </h2>
                
                {/* here signup item */}
                <div className='flex flex-col w-full bg-gray-600 p-8 rounded-lg shadow-xl '>
                    <h2 className='text-3xl font-bold text-blue-100 mb-4 lg:text-center '>
                        Create an Account
                    </h2>
                    <form className="space-y-4 ">
                        <div className='flex flex-col '>
                            <label htmlFor="signupName" className='text-sm font-semibold text-blue-100 '>Name</label>
                            <input type="text" id='signupName' name='signupName' className='py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="signupEmail" className='text-sm font-semibold text-blue-100 '>Email Address</label>
                            <input type="email" id='signupEmail' name='signupEmail' className='py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="signupPassword" className='text-sm font-semibold text-blue-100 '>Password</label>
                            <input type="password" id='signupPassword' name='signupPassword' className='py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ' placeholder='Enter your password' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="signupRepeatPassword" className='text-sm font-semibold text-blue-100 '>Repeat Password</label>
                            <input type="password" id='signupRepeatPassword' name='signupRepeatPassword' className='py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 ' placeholder='Enter your password again' />
                        </div>
                        <button type='submit' className='w-full text-xl font-semibold py-2 px-4 bg-blue-500 text-blue-50 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 '>Sign Up</button>
                    </form>
                </div>

            </div>
        </div>

    </>
  )
}

export default Account;