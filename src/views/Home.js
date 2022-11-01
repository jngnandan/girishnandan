
import React from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import {RiMenuLine} from 'react-icons/ri'

import {MdOutlineDesignServices} from 'react-icons/md'

function Home() {
  return (
    <div>
        {/* Header */}
        <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h1 className='text-3xl text-white font-semibold'>Hi 👋, I'm Nandan</h1>
        <h2 className='text-3xl text-white font-light'>I'm Product Designer & Frontend Developer</h2>

        <div>
            <p className='text-white mt-6 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illo rem modi enim, minima incidunt velit odio magni ex! Laborum quis asperiores vero perferendis officiis a cupiditate doloremque optio. Voluptates?</p>
        </div>
        </div>
        {/* Skills */}
        <div className='bg-gray-800 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h1 className='text-3xl text-white font-semibold'><span className="font-light">Better</span> Experience ⚒️</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
                                <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                    <h1 className="text-5xl">📐</h1>
                                    <h1 className='text-white font-semibold text-xl mt-2'>Product Design</h1>
                                    <p className='text-white font-light text-sm mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur amet dolor</p>
                                </div>
                                <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                    <h1 className="text-5xl">🧑🏽‍💻</h1>
                                    <h1 className='text-white font-semibold text-xl mt-2'>Frontend Development</h1>
                                    <p className='text-white font-light text-sm mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur amet dolor</p>
                                </div>
                                <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                    <h1 className="text-5xl">📚</h1>
                                    <h1 className='text-white font-semibold text-xl mt-2'>Readings</h1>
                                    <p className='text-white font-light text-sm mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur amet dolor</p>
                                </div>
                        </div>
                </div>
                {/* Projects */}
                <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'><span className="font-light">My</span> Projects 🚀</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/destination-search-output-v2.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-output-v2.gif" alt="" className='w-full h-full object-contain rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>

                    </div>
                </div>

                
        

</div>
  )
}

export default Home