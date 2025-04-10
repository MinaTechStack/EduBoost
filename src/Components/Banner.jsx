import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
    return (
        <div className='bg-[#e0f2fe] w-full py-[100px]'>
            <div className='max-w-[1240px] mx-auto my-[100px] text-center'>
                <div className='text-black font-bold text-xl md:text-3xl mb-4 md:p-[24px]'>Learn with us</div>
                <h2 className='text-black font-bold  text-5xl md:text-[60px] md:p-[24px] mb-4'>Grow with us.</h2>
                <div className=' text-[20px] md:text-[50px] text-black font-bold md:p-[24px]'>Learn
                    <ReactTyped
                    className='pl-3'
                        strings={[
                            " Web Development",
                            "Digital Marketing",
                            "Ethical Hacking",
                        ]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop={true}
                    />

                </div>
                <button className='bg-[#0284c7] text-white p-3 rounded'>Get Started</button>
            </div>


        </div>
    )
}
