import React from "react";

import {MdOutlineDesignServices} from 'react-icons/md'
import {BiCodeBlock} from 'react-icons/bi'

import {SiMaterialdesignicons} from 'react-icons/si'

import Image from '../assets/images/Rectangle.png'


const Intro = () => {

    return (
        <div className="intro">
                {/* Header */}
                <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'>Hi 👋, I'm Girish Nandan</h1>
                    <h2 className='text-3xl text-white font-light'>I'm Product Designer & Frontend Developer</h2>

                    <div>
                        <p className='text-gray-400 mt-6 font-light'>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    
                </div>

                {/* Skills */}
        <div className='bg-gray-800 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h1 className='text-3xl text-white font-semibold mb-6'><span className="font-light">Better</span> Experience ⚒️</h1>
           
             {/* Skills */}
             <div className='grid grid-cols-2 gap-4'>
                
                <div className='flex flex-col justify-center items-center bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10 rounded-md'>
                        <h1 className="text-5xl my-6">🎨</h1>
                        <p className='text-xl text-white font-semibold'>Product Design</p>
                </div>

                <div className='flex flex-col justify-center items-center bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10 rounded-md'>
                        <h1 className="text-5xl my-6">💻</h1>
                        <p className='text-xl text-white font-semibold'>Development</p>
                </div>

             </div>        
        </div>

         {/* UX Case Studies */}
            <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                <h1 className='text-3xl text-white font-semibold mb-6'><span className="font-light">Better</span> Casestudies 📑</h1>
                {/* Case studies */}
                <div className="grid grid-row-2 gap-2">
                    <div>
                     <img src={Image}/>
                    <div>
                    <h1 className="text-2xl text-white">Book App</h1>
                        <p className="text-white text-light">
                                <span className="font-semibold">Problem: </span>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    
                    <div className="flex flex-row justify-start mt-2">
                        <button className="mr-2 border border-1 px-2 rounded-full text-white">UX</button>
                        <button className="mr-2 border border-1 px-2 rounded-full text-white">UI</button>
                        <button className="mr-2 border border-1 px-2 rounded-full text-white">Development</button>


                    </div>



                    </div>
                    </div>

                </div>
            
            
            </div>

        </div>
    );
}

export default Intro;