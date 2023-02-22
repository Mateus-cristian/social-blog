import React, { useEffect } from 'react'
import cloud from '@/webapp/assets/images/cloud.png'
import { useHistory } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object } from 'yup'
import axios from 'axios';
import toast, { Toast } from 'react-hot-toast';


interface User {
    username: string,
    password: string,
    imagePath: string
}

const addSchema = object().shape({
    username: string().required('Nome é obrigátorio'),
    password: string().required('Senha é obrigátorio'),

});

export default function Login() {

    const history = useHistory();
    const { control, handleSubmit, setError, watch, formState: { errors } } = useForm({ resolver: yupResolver(addSchema) })



    async function submit(value: any) {


        const data = await axios.post<User>('http://localhost:8080/users/login', value).then(({ data }) => {
            localStorage.setItem('username', data.username);
            localStorage.setItem('imagePath', data.imagePath);
            history.push('/')
        }).catch((data) => {
            if (data.response.status === 404) {
                toast.error('Usuário não encontrado!')
            }
        })

    }



    return (
        <main className='bg-blue-500 h-screen w-full'>
            <div className='flex'>
                <div className='flex flex-col text-center h-screen justify-center items-center w-[50%]'>
                    <p className='text-white text-[3.5rem]'>Faça o seu login</p>
                    <p className='text-white text-[3.5rem]'>Crie seus momentos...</p>
                </div>
                <div className='flex text-center h-screen justify-center items-center w-[50%]'>
                    <div className='bg-blue-700 rounded-lg w-[34.375rem] h-[33.125rem]'>
                        <div className='flex gap-3 justify-center mt-10'>
                            <img src={cloud} alt="pequena nuvem" />
                            <div className='mt-4'>
                                <div className='relative'>
                                    <span className='font-especial text-3xl text-white'>S</span>
                                    <span className='font-especial text-3xl text-white ml-1 top-2 relative'>O</span>
                                    <span className='font-especial text-3xl text-white ml-1'>C</span>
                                    <span className='font-especial text-3xl text-white ml-2 top-2 relative'>I</span>
                                    <span className='font-especial text-3xl text-white ml-1'>A</span>
                                    <span className='font-especial text-3xl text-white ml-2 top-2 relative'>L</span>
                                </div>
                                <div className='mt-3'>
                                    <span className='font-especial text-3xl text-white'>B</span>
                                    <span className='font-especial text-3xl text-white ml-1 top-1 relative'>L</span>
                                    <span className='font-especial text-3xl text-white ml-2'>O</span>
                                    <span className='font-especial text-3xl text-white ml-1 top-1 relative'>G</span>
                                </div>
                            </div>
                        </div>
                        <form className={`flex flex-col gap-4 justify-center items-center w-full h-[calc(530px-160px)]`} onSubmit={handleSubmit(submit)}>
                            <div className='flex flex-col items-center  w-full max-w-[350px]'>
                                <label className='flex self-start text-lg  text-white font-title'>Login</label>
                                <Controller
                                    control={control}
                                    name="username"
                                    render={({ field }) => (
                                        <input {...field} type='text' className='w-full h-14 rounded-md border-2 border-blue-500 text-blue-500 p-2 font-text' />
                                    )}
                                />
                                {errors.username && <p className='font-text text-red-500 text-xs  self-start'>{errors.username.message}</p>}
                            </div>
                            <div className='flex flex-col items-center  w-full max-w-[350px]'>
                                <label className='flex  self-start  text-lg text-white font-title'>Senha</label>
                                <Controller
                                    control={control}
                                    name="password"
                                    render={({ field }) => (
                                        <input {...field} type="password" className='w-full h-14 rounded-md border-2 border-blue-500 text-blue-500 p-2 font-text' />
                                    )}
                                />
                                {errors.password && <p className='font-text text-red-500 text-xs  self-start'>{errors.password.message}</p>}
                            </div>
                            <div className='flex flex-col items-center  w-full max-w-[350px]'>
                                <button type='submit' className='w-full h-14 rounded-md border-2 border-white text-white text-lg uppercase p-2 font-text hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-colors'>Entrar</button>
                            </div>
                            <div>
                                <a onClick={() => history.push('/create-user')} href="" className='font-title text-white hover:font-semibold  hover:underline hover:rounded-md  transition-all'>Criar usuario</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </main >
    )
}
