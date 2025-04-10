import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, SetToggle] = useState(false);
    return (
        <div className='bg-[#0f172a] p-4'>
            <div className="max-w-[1240px] flex justify-between items-center py-[8px] mx-auto">
                <div className='text-3xl font-bold text-white'>
                EduBoost
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => SetToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => SetToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }


                <ul className='hidden md:flex text-white gap-10'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* Responsive menu */}
                <ul className={`duration-400 md:hidden text-white w-full h-screen fixed bg-black top-[84px] 
                    ${toggle ? 'left-[0]' : 'left-[-100%]'}
                    `}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>


            </div>



        </div>
    )
}
