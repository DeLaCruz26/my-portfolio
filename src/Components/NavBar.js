import React from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <header className='bg-red-600'>
           <div>
               <nav>
                   <NavLink to='/'>
                       Dametrik
                   </NavLink>
                   <NavLink to='/post'>
                       Blog posts
                   </NavLink>
                   <NavLink to='/project'>
                       Projects
                   </NavLink>
                   <NavLink to='/about'>
                       About me
                   </NavLink>
               </nav>
           </div>
        </header>
    );
}

export default NavBar;
