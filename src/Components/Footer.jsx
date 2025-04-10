import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='w-full bg-[#0f172a] p-4'>
            <div className='max-w-[1240px]  mx-auto md:grid grid-cols-4 p-5 '>
                <div className='col-span-2 p-4'>
                    <h1 className='text-sky-400 font-bold mb-3'>EduBoost</h1>
                    <p className='text-white mb-5 text-justify'>
                        EduBoost is your gateway to interactive and personalized learning. We empower students with resources that make education accessible, engaging, and effective. From real-time insights to expert support, EduBoost is committed to helping learners achieve their goals through modern tech-driven solutions.
                    </p>
                    <div className='flex gap-16 items-center w-[300px] '>
                        <FaFacebookF className='text-[blue] bg-white' />
                        <BsInstagram className='text-white' />
                        <AiOutlineTwitter className='bg-white' />
                        <FaGithub className='bg-white' />
                    </div>
                </div>
                <div className='col-span-1 p-5'>
                    <h1 className='text-sky-400 mb-1 font-bold'>Solutions</h1>
                    <ul className='flex flex-col gap-1 text-white'>
                        <ul>
                            <li><a href="">Analytics</a></li>
                            <li><a href="">Marketing</a></li>
                            <li><a href="">Commerce</a></li>
                            <li><a href="">Insights</a></li>
                        </ul>
                    </ul>
                </div>
                <div className='col-span-1 p-5'>
                    <h1 className='text-sky-400 mb-1 font-bold'>Support</h1>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Guides</a></li>
                        <li><a href="">API Status</a></li>
                    </ul>
                </div>
                <div className='col-span-1 p-5'>
                    <h1 className='text-sky-400 mb-1 font-bold'>Company</h1>
                    <ul className='flex flex-col gap-1 text-white'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Press</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
