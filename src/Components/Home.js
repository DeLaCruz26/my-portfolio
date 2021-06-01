import React from 'react';
import image from '../portfolio-img-2.jpeg'

const Home = () => {
    return (
        <main>
            <img src={image} 
            alt='developer picture' 
            className='absolute object-cover w-full h-full'
            />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 md:pt-64 px-8'>
                <h1 className='text-black font-bold cursive leading-none lg:leading-snug md:leading-snug md:text-3xl lg:text-6xl'
                >
                    Hello. I'm Dametrik Fick, I'm a full-stack web developer.
                </h1>
            </section>
        </main>
    );
}

export default Home;
