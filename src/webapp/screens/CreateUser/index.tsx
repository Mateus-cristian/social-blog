import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, mixed, ref } from 'yup'
import axios from 'axios';



const addSchema = object().shape({
    name: string().required('Nome é obrigátorio'),
    password: string().required('Senha é obrigátorio'),
    image: mixed().required('A imagem é obrigatória'),
    repeatPassword: string().oneOf([ref('password'), ''], 'As senhas estão incorretas')
});

export default function CreateUser() {

    const { control, handleSubmit, setError, watch, formState: { errors } } = useForm({ resolver: yupResolver(addSchema) })


    const submit = (value: any) => {

    }


    return (
        <div className='flex justify-center items-center bg-blue-500'>
            <div className='flex text-center h-screen justify-center items-center w-[50%]'>
                <div className='bg-blue-700 rounded-lg w-[34.375rem] py-20'>
                    <p className='mb-10 font-especial text-2xl text-white'>Crie seu usuário</p>
                    <form className='flex flex-col gap-4 justify-center items-center w-full h-full' onSubmit={handleSubmit(submit)}>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <>
                                <label className='flex self-start text-lg  text-white font-title'>Nome</label>
                                <Controller
                                    control={control}
                                    name="name"
                                    render={({ field }) => (
                                        <input {...field} type='text'
                                            className='w-full h-14
                                      rounded-md border-2
                                    border-blue-500
                                    text-blue-500 p-2
                                      font-text'
                                            aria-invalid={errors.name ? "true" : "false"}
                                        />
                                    )}
                                />
                                {errors.name && <p className='font-text text-red-500 text-xs  self-start'>{errors.name.message}</p>}
                            </>
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex  self-start  text-lg text-white font-title'>Imagem</label>
                            <Controller
                                control={control}
                                name="image"
                                render={({ field }) => (
                                    <input type="file"
                                        onChange={(e) => }
                                        {...field}
                                        className='w-full h-14
                                        rounded-md border-2
                                      border-blue-500
                                      text-blue-500 p-2 font-text'
                                    />
                                )}
                            />
                            {errors.image && <p className='font-text text-red-500  text-xs self-start'>{errors.image.message ?? ''}</p>}
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex  self-start  text-lg text-white font-title'>Senha</label>
                            <Controller
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <input {...field} type="password"

                                        className='w-full h-14
                                    rounded-md border-2
                                  border-blue-500
                                  text-blue-500 p-2
                                   font-text' />
                                )}
                            />
                            {errors.password && <p className='font-text text-red-500  text-xs  self-start'>{errors.password.message ?? ''}</p>}
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <label className='flex  self-start  text-lg text-white font-title'>Confirmação da Senha</label>
                            <Controller
                                control={control}
                                name="repeatPassword"
                                render={({ field }) => (
                                    <input {...field} type="password"
                                        className='w-full h-14 
                                    rounded-md border-2 
                                    border-blue-500 text-blue-500 
                                    p-2 font-text' />
                                )}
                            />
                            {errors.repeatPassword && < p className='font-text text-red-500 text-xs self-start'>{errors.repeatPassword.message ?? ''}</p>}
                        </div>
                        <div className='flex flex-col items-center  w-full max-w-[350px]'>
                            <button type='submit' className='w-full h-14 rounded-md border-2 border-white text-white text-lg uppercase p-2 font-text hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors'>Criar usuário</button>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}
