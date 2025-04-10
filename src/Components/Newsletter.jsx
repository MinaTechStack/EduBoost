import React from 'react'

export default function Newsletter() {
    return (
        <div className='w-full bg-[#e0f2fe] p-4'>
            <div className='md:flex justify-between py-[50px] mx-auto max-w-[1240px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-2xl font-bold text-black'>Want to learn latest I.T skills?</h1>
                    <span className='text-black'>Sign up to our newsletter and stay up to date.</span>
                </div>
                <div className='m-2'>
                    <input type="text" placeholder="Email" className='sm:w-auto p-2 mb-2 rounded bg-white mr-2 text-black outline-none' />
                    <button className='bg-[#0284c7] text-white p-2 rounded'>Get Started</button>
                    <br />
                    <p className='text-black'>
                        We care about the protection of your data. Read our <br /> <a href="" className='text-black'>Privacy Policy.</a>
                    </p>
                </div>

            </div>
        </div>
    )
}
