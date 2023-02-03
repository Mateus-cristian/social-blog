import React from 'react'
import { TbDoorExit } from 'react-icons/tb'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { TfiUser, TfiWrite } from 'react-icons/tfi'
import { useHistory } from 'react-router-dom'


export default function Header() {


    const history = useHistory()




    return (
        <div className='bg-blue-500 max-h-28 h-20 flex justify-between pl-10 pr-10 items-center'>
            <div className='flex gap-2'>
                <div className='flex gap-1 items-center cursor-pointer' onClick={() => history.push('/create-post')}>
                    <TfiWrite color='#fff' size={24} />
                    <p className='font-especial text-white'>Criar post</p>
                </div>
                <div className='flex gap-1 items-center cursor-pointer' onClick={() => history.push('/home')}>
                    <TfiUser color='#fff' size={24} className="cursor-pointer" />
                    <p className='font-especial text-white'>Feed</p>
                </div>
                <HiOutlineMagnifyingGlass color='#fff' size={24} className="cursor-pointer" />
            </div>
            <TbDoorExit color='#fff' size={24} className="cursor-pointer" />
        </div>
    )
}
