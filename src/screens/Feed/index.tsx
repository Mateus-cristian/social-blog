import React from 'react'
import Header from '../../components/Header'
import Post from '../../components/Post'

export default function Feed() {
    return (
        <div>
            <Header />
            <main className='bg-pantone h-screen'>
                <div className='pt-10'>
                    <Post />
                </div>
            </main>
        </div>
    )
}
