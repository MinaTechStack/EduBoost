import React from 'react'
import single from "../assets/img/1.png";
import double from "../assets/img/2.png";
import triple from "../assets/img/3.png";

export default function Plans() {
    return (
        <div className='py-[100px] px-2'>
            <div className='max-w-[1240px] gap-6 md:w-[900px] mx-auto md:grid grid-cols-3 flex flex-col items-center'>
                <div className='shadow-xl hover:scale-105 mt-5 flex flex-col items-center gap-4 p-5 duration-500'>
                    <img src={single} className='w-[80px] h-[60px]' alt="" />
                    <h3 className='text-[16px] font-bold'>Web Development</h3>
                    <h1 className='text-[20px] font-bold'>$149</h1>
                    <p className='text-justify p-5'>
                        Learn how to build responsive and dynamic websites using HTML, CSS, JavaScript, and modern frameworks like React. Perfect for beginners and aspiring front-end developers.
                    </p>
                    <button className='bg-[#0284c7] w-[155px] font-[500] text-white p-2 rounded'>Start Trial</button>
                </div>

                <div className='shadow-xl bg-gray-100 mt-5 flex flex-col items-center gap-4 p-5 hover:scale-105 duration-500'>
                    <img src={double} className='w-[80px] h-[60px]' alt="" />
                    <h3 className='text-[16px] font-bold'>Digital Marketing</h3>
                    <h1 className='text-[20px] font-bold'>$149</h1>
                    <p className='text-justify p-5'>
                        Gain expertise in SEO, social media, email marketing, and Google Ads. Learn strategies to grow any business online and track performance with analytics tools.
                    </p>
                    <button className='bg-black w-[155px] font-[500] text-[#0284c7] p-2 rounded'>Start Trial</button>
                </div>

                <div className='shadow-xl hover:scale-105 mt-5 flex flex-col items-center gap-4 p-5 duration-500'>
                    <img src={triple} className='w-[80px] h-[60px]' alt="" />
                    <h3 className='text-[16px] font-bold'>App Development</h3>
                    <h1 className='text-[20px] font-bold'>$149</h1>
                    <p className='text-justify p-5'>
                        Master mobile app development for Android and iOS using Flutter and React Native. Build real-world projects and publish your apps on the Play Store and App Store.
                    </p>
                    <button className='bg-[#0284c7] w-[155px] font-[500] text-white p-2 rounded'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}
