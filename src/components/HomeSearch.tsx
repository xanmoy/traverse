'use client'
import { useState } from 'react'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GiAngularSpider } from "react-icons/gi";
export const HomeSearch = () => {
    const [input, setInput] = useState('');
    console.log(input)

    return (
        <>
            <form action="" className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-400 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
                <GiAngularSpider className='text-xl text-white ' />

                <input type="text" className='flex-grow focus:outline-none bg-transparent text-black dark:text-white'
                
                onChange={(e) => setInput(e.target.value)}
                />
                <FaSearch className='text-xl text-white ' />
            </form>
            <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-r py-4'>
                <button className='bg-transparent border border-zinc-700 rounded-md text-sm text-gray-800 dark:text-slate-300 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>Traverse The net</button>
                <button className='bg-transparent border border-zinc-700 rounded-md text-sm text-gray-800 dark:text-slate-300 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>News</button>

            </div>
        </>
    )
}


