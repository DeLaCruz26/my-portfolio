import React, { useState, useEffect } from 'react';
import sanityClient from '../client'
import { GoMarkGithub } from 'react-icons/go'
import { FaYoutube } from 'react-icons/fa'

const Project = () => {
    const [projectData, setprojectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link1,
            link2,
            tags
        }`).then((data) => setprojectData(data))
        .catch(console.error)
    }, []);

    return (
        <main className='bg-indigo-100 min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my projects page!</h2>
                <section className='grid grid-cols-2 gap-8'>
                    {projectData && projectData.map((project, index) => (
                    <article className='relative rounded-lg shadow-xl bg-white p-16'>
                        <h3 className='text-gray-800 text-2xl font-bold mb-2'>
                            {project.title}
                        </h3>
                        <div className='text-gray-500 text-xs space-x-4'>
                            <span>
                                <strong className='font-bold'>Finished on</strong>:{' '}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className='font-bold'>Type</strong>:{' '}
                                {project.projectType}
                            </span>
                            <p className='my-6 text-lg text-gray-700 leading-relaxed'>{project.description}</p>
                            <div className='flex space-x-4'>
                                <div><a href={project.link1} rel='noopener noreferrer' target='_blank' className='text-red-500 font-bold hover:underline text-3xl'><GoMarkGithub /></a></div>
                                <div><a href={project.link2} rel='noopener noreferrer' target='_blank' className='text-red-500 font-bold hover:underline text-3xl'><FaYoutube /></a></div>
                            </div>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    );
}

export default Project;
