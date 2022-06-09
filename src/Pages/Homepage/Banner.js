import React from 'react';
import Type from '../Shared/Type';
import picture from '../../assets/My Pic 1.png'
const Banner = () => {
    return (
       
        <div className='bg-primary m-auto  min-h-screen'>
            <div className='lg:flex flex-row-reverse pt-24 sm:flex flex-row'>
                <img src={picture} class="max-w-lg rounded-lg " alt='' />

                <div className='flex flex-col pt-24 lg:w-1/2'>
                    <h1 class="text-xl font-bold mb-2">I'm <br /><span className=' text-5xl font-bold font-sanns'> Kaniz Fatema</span></h1>
                    <Type></Type>
                    <button class="btn w-1/4 text-white btn-ghost mt-5 bg-[#2b7a78] ">Get Started</button>
                </div>
            </div>
        </div>



    );
};

export default Banner;