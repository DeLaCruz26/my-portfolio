import React from 'react';
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return (
        <header className='bg-indigo-900'>
           <div className='container mx-auto flex justify-between'>
               <nav className='flex'>
                   <NavLink to='/'
                    exact 
                    activeClassName='text-white' 
                    className='inline-flex items-center py-6 px-3 mr-4 text-indigo-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest'
                    >
                        DF
                   </NavLink>
                   <NavLink to='/post' 
                   className='hidden md:inline-flex items-center py-3 px-3 my-6 rounded text-indigo-100 hover:text-gray-800'
                   activeClassName='text-indigo-50 bg-indigo-700'
                   >
                       Blogs
                   </NavLink>
                   <NavLink to='/project' 
                   className='hidden md:inline-flex items-center py-3 px-3 my-6 rounded text-indigo-100 hover:text-gray-800'
                   activeClassName='text-indigo-50 bg-indigo-700'
                   >
                       Projects
                   </NavLink>
                   <NavLink to='/about' 
                   className='hidden md:inline-flex items-center py-3 px-3 my-6 rounded text-indigo-100 hover:text-gray-800'
                   activeClassName='text-indigo-50 bg-indigo-700'
                   >
                       About
                   </NavLink>
               </nav>
               <div className='hidden md:inline-flex py-3 px-3 my-6'>
                <SocialIcon url='https://github.com/DeLaCruz26' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                <SocialIcon url='https://www.linkedin.com/in/dametrik-fick-34971913a/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                <SocialIcon url='https://www.youtube.com/channel/UCGqCUBv6EGv7OBuajQUZ3oQ' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
               </div>
           </div>
        </header>
    );
}

export default NavBar;
