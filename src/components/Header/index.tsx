import React from 'react'
import { TbDoorExit } from 'react-icons/tb'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'


export default function Header() {
    return (
        <div className='bg-blue-500 max-h-28 h-20 flex justify-between pl-10 pr-10 items-center'>
            <HiOutlineMagnifyingGlass color='#fff' size={32} className="cursor-pointer" />
            <span className='text-white font-title text-3xl'>Social Blog</span>
            <TbDoorExit color='#fff' size={32} className="cursor-pointer" />
        </div>
    )
}
