import React from 'react';
import image from '../portfolio-img.jpeg'

const Home = () => {
    return (
        <main>
            <img src={image} alt='Keyboard and coffee' className='absolute object-cover w-ful h-full'/>
            <section>
                <h1>Greetings. I'm Dametrik</h1>
            </section>
        </main>
    );
}

export default Home;
