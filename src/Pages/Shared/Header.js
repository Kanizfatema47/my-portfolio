import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/signature.png'
const Header = () => {
    return (
        <div class="navbar bg-teal-600">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>My Projects</Link></li>
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link to='/skills'>Skills</Link></li>
                        <li><Link to='/education'>Education</Link></li>
                        <li><Link to='/experience'>Experience</Link></li>
                    </ul>
                </div>
                <Link to='/' className='w-1/2'><img src={image} alt="" /></Link>
            </div>
            <div class="navbar-end  hidden lg:flex ">
                <ul class="menu menu-horizontal p-0 mr-20 text-lg text-white">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>My Projects</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/education'>Education</Link></li>
                    <li><Link to='/experience'>Experience</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;