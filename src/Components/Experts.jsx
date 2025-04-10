import React from 'react'
import pc from "../assets/img/pc.jpg";

export default function Experts() {
    return (
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={pc} alt="" />
            </div>
            <div className='col-span-1  flex flex-col justify-center'>
                <h1 className='text-[#0284c7] font-bold my-2'>LEARN FROM EXPERTS</h1>
                <p className='my-2 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas cum laudantium consequatur, perspiciatis non sapiente laboriosam aperiam odit, mollitia nobis quibusdam debitis ea et reprehenderit possimus excepturi autem iure.
                </p>
                <button className='w-[30%] bg-[#0284c7] text-white p-3 rounded'>Get Started</button>
            </div>

        </div>
    )
}
