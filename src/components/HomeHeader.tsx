import Link from 'next/link'
import React from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { TbGridDots } from 'react-icons/tb';


export const HomeHeader = () => {
    return (
        <header className='flex justify-end p-5 text-sm '>
            <div className='flex space-x-4 items-center'>
                <Link href={"https://mail.google.com"} className='hover:text-indigo-500'>
                   Web
                </Link>
                <Link href={"https://mail.google.com"} className='hover:text-indigo-500'>
                   Images
                </Link>
                {/* <FaGithubAlt /> */}
                {/* <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' /> */}
                {/* <button>Sign In</button> */}
                

            </div>
        </header>

    )
}

