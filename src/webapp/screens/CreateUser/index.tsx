import React from 'react'

export default function CreateUser() {
    return (
        <div className='flex justify-center items-center bg-blue-500'>
            <div className='flex text-center h-screen justify-center items-center w-[50%]'>
                <div className='bg-blue-700 rounded-lg w-[34.375rem] py-20'>
                    <p className='mb-10 font-especial text-2xl text-white'>Crie seu usuário</p>
                    <form className={`flex flex-col gap-4 justify-center items-center w-full h-full `}>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex self-start text-lg  text-white font-title'>Nome</label>
                            <input type='text' className='w-full h-14 rounded-md border-2 border-blue-500 text-blue-500 p-2 font-text' />
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex  self-start  text-lg text-white font-title'>Imagem</label>
                            <input type="file" className='w-full h-14 rounded-md border-2 border-blue-500 text-blue-500 p-2 font-text' />
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex  self-start  text-lg text-white font-title'>Senha</label>
                            <input type="password" className='w-full h-14 rounded-md border-2 border-blue-500 text-blue-500 p-2 font-text' />
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex  self-start  text-lg text-white font-title'>Confirmação da Senha</label>
                            <input type="password" className='w-full h-14 rounded-md border-2 border-blue-500 text-blue-500 p-2 font-text' />
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <button type='submit' className='w-full h-14 rounded-md border-2 border-white text-white text-lg uppercase p-2 font-text hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors'>Criar usuário</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
