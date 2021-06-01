import React, { useState, useEffect } from 'react';
import sanityClient from '../client'
import background from '../background.jpeg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

const About = () => {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'author']{
            name, 
            bio, 
            'authorImage': image.asset->url
        }`)
        .then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, []);
    if (!author) return <div>Loading...</div>

    return (
        <main className='relative'>
            <img src={background} alt='portfolio image' className='absolute w-full' />
            <div className='p-6 md:p-10 lg:pt-48 md:pt-48 container mx-auto relative'>
                <section className='bg-indigo-800 rounded-lg shadow-2xl lg:flex p-20 md:flex p-10'>
                    <img src={urlFor(author.authorImage).url()} className='rounded w-28 h-28 lg:w-64 lg:h-64 md:w-44 md:h-44 mr-8 text-center sm:text-left' alt={author.name} />
                    <div className='md:text-lg flex flex-col justify-center'>
                        <h1 className='cursive text-sm lg:text-6xl text-indigo-300 mb-4'>Hi, I'm{' '}
                            <span className='text-indigo-100'>{author.name}</span>
                        </h1>
                        <div className='prose text-xs lg:prose-xl text-white'>
                            <BlockContent blocks={author.bio} projectId='nx7nj772' dataset='production' />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default About;
