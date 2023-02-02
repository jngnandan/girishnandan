import React from "react";

import {MdOutlineDesignServices} from 'react-icons/md'
import {BiCodeBlock} from 'react-icons/bi'

import {SiMaterialdesignicons} from 'react-icons/si'

const Intro = () => {

    return (
        <div className="intro">
                    {/* Header */}
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
        <h1 className='text-3xl text-white font-semibold'><span className="font-light">Better</span> Experience ⚒️</h1>
           
           <div className='flex flex-col md:flex-row justify-between items-center mt-10'>

              <div>
                    <BiCodeBlock className='text-5xl text-white'/>
                    <p>Product Design</p>
              </div>

                <div>
                    <SiMaterialdesignicons className='text-5xl font-thin text-white'/>
                    <p>Frontend Development</p>
                </div>

           </div>
                </div>

        </div>
    );
}

export default Intro;