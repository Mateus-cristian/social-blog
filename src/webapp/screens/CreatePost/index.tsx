import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'

export default function CreatePost() {

    const history = useHistory()

    return (
        <>
            <Header />
            <div className='flex flex-col w-full  items-center bg-pantone h-screen'>
                <div className='m-10 flex justify-center '>
                    <p className='text-blue-500 font-especial text-4xl font-medium tracking-widest'>Crie seu momento...</p>
                </div>

                <div className='w-full max-w-[830px]  bg-white border border-blue-500 rounded-md px-[1.85rem] py-[2rem]'>
                    <textarea placeholder='Compartilhe seu momento' className=' w-full p-4 rounded-md min-h-[250px] bg-pantone font-text text-gray-700 resize-none' />
                </div>

                <div className='flex gap-2 w-full max-w-[830px] justify-end  '>
                    <button className='font-bold  mt-5 h-14 rounded-md border-2 bg-blue-500 border-blue-500 text-white text-lg uppercase p-2 px-6 font-title hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors' onClick={() => history.goBack()}>Cancelar</button>
                    <button className='font-bold  mt-5 h-14 rounded-md border-2 bg-blue-500 border-blue-500 text-white text-lg uppercase p-2 px-6 font-title hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors'>Enviar</button>
                </div>

            </div>
        </>
    )
}
