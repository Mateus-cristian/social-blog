import React from 'react'
import { AiFillLike, AiOutlineComment } from 'react-icons/ai'

export default function Post() {
    return (
        <div className='w-full max-w-[830px] h-full bg-white border border-blue-500 rounded-md px-[1.85rem] py-[2rem]'>
            <header className='flex gap-4'>
                <div className='max-w-[5.75rem] max-h-[5.75rem] '>
                    <img src="https://avatars.githubusercontent.com/u/77680225?v=4" alt="" className='rounded-full' />
                </div>
                <div className='mt-2'>
                    <p className='font-title text-gray-700 text-sm font-bold'>Mateus Cristian</p>
                    <p className='font-title text-gray-700 text-sm'>Publicou há 1 dia</p>
                </div>
            </header>

            <section className='mt-10'>
                <p className='font-text text-gray-700 text-base'>
                    Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis
                    scelerisque, eget.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.Praesent malesuada
                    urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Si u mundo tá muito paradis?
                    Toma um mé que o mundo vai girarzis!
                </p>
            </section>

            <section className='mt-6'>
                <div className='flex flex-col'>
                    <div className='flex justify-between border-b border-b-grey-100 pb-4 '>
                        <div className='flex gap-1 items-center'>
                            <AiFillLike className="text-blue-700 scale-x-[-1]" />
                            <p className='font-especial text-lg'>10</p>
                        </div>
                        <div>
                            <p className='font-especial text-lg'><span className='text-2xl'>0</span> Comentário</p>
                        </div>
                    </div>
                    <div className='pt-4 flex gap-4'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <AiFillLike className="text-blue-700 scale-x-[-1]" />
                            <p className='font-especial text-lg'>Curtir</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <AiOutlineComment size={18} className="text-blue-700 scale-x-[-1]" />
                            <p className='font-especial text-lg'>Comentar</p>
                        </div>
                    </div>
                </div>
            </section>

            <textarea placeholder='Comentar' className='mt-10 w-full p-4 rounded-md min-h-[160px] bg-pantone font-text text-gray-700 resize-none' />

        </div>
    )
}
