import React from 'react'
import Header from '../../components/Header'
import Post from '../../components/Post'

export default function Feed() {
    return (
        <div>
            <Header />
            <main className='bg-pantone h-screen'>
                <div className='pt-10 flex w-full justify-around'>
                    <div className='flex flex-col gap-2 w-full max-w-[320px]'>
                        <div className='flex gap-2 justify-between w-full'>
                            <div className='max-w-[5.75rem] max-h-[5.75rem] '>
                                <img src="https://avatars.githubusercontent.com/u/77680225?v=4" alt="" className='rounded-full' />
                            </div>
                            <div className='mt-2 w-full'>
                                <div className='flex justify-between '>
                                    <p className='font-title text-blue-700 text-sm font-medium'>Mateuszoo21</p>
                                    <span className='font-title text-blue-700 text-sm font-bold cursor-pointer'>Editar</span>
                                </div>
                                <p className='font-title text-blue-700 text-sm font-medium mt-1'>Mateus Cristian</p>
                            </div>
                        </div>
                        <div>
                            <button className='w-full mt-5 h-14 rounded-md border-2 bg-blue-500 border-blue-500 text-white text-lg uppercase p-2 font-text hover:bg-white hover:text-blue-500 hover:border-white transition-colors'>Criar post</button>
                        </div>
                    </div>
                    <Post />
                </div>
            </main>
        </div>
    )
}
