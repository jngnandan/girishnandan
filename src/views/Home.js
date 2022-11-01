
import React from 'react'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import {RiMenuLine} from 'react-icons/ri'

import {MdOutlineDesignServices} from 'react-icons/md'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiSqlite} from 'react-icons/si'
import {GrNode} from 'react-icons/gr'
import {TbBrandReactNative} from 'react-icons/tb'

import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiSketch} from 'react-icons/si'
import {SiFigma} from 'react-icons/si'
import {SiAdobexd} from 'react-icons/si'
import {SiMaterialdesign} from 'react-icons/si'
import ReactTooltip from 'react-tooltip'

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
        {/* My Skills */}
        <div className='grid grid-cols-9 md:grid-cols-9 lg:grid-cols-9 gap-4 mt-10'>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <AiFillHtml5 className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <FaCss3Alt className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <FaBootstrap className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiTailwindcss className='text-3xl text-gray-900'/>
            </div>

            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiJavascript className='text-2xl text-gray-900'/>
            </div>

            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiReact className='text-3xl text-gray-900'/>
            </div>

            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiSqlite className='text-3xl text-gray-900'/>
            </div>

            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <GrNode className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <TbBrandReactNative className='text-3xl text-gray-900'/>
            </div>
            <ReactTooltip id='html' place='top' effect='solid'>
                HTML
            </ReactTooltip>
        </div>

        {/* Design Skills */}
        <div className='grid grid-cols-9 md:grid-cols-9 lg:grid-cols-9 gap-4 mt-10'>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiAdobeillustrator className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiAdobephotoshop className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiSketch className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiFigma className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiAdobexd className='text-3xl text-gray-900'/>
            </div>
            <div className='flex items-center justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiMaterialdesign className='text-3xl text-gray-900'/>
            </div>

        </div>

        </div>
        {/* Skills */}
        <div className='bg-gray-800 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h1 className='text-3xl text-white font-semibold'><span className="font-light">Better</span> Experience ⚒️</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10'>
                                <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                    <h1 className="text-5xl">📐</h1>
                                    <h1 className='text-white font-semibold text-lg mt-3'>Product Design</h1>
                                    <p className='text-white font-light text-sm mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur amet dolor</p>
                                </div>
                                <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                    <h1 className="text-5xl">🧑🏽‍💻</h1>
                                    <h1 className='text-white font-semibold text-lg mt-3 text-center'>Frontend Development</h1>
                                    <p className='text-white font-light text-sm mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur amet dolor</p>
                                </div>
                                <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                    <h1 className="text-5xl">📚</h1>
                                    <h1 className='text-white font-semibold text-lg mt-3'>Book Notes</h1>
                                    <p className='text-white font-light text-sm mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit, consectetur amet dolor</p>
                                </div>
                        </div>
                </div>
                {/* Projects */}
                <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'><span className="font-light">My</span> Projects 🚀</h1>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
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
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif"  alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-desktop-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-output-v2.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/events-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>
                        <div className='bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center'>
                            <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-output-v0.gif" alt="" className='w-full h-full object-scale-down rounded-lg'/>
                        </div>


                    </div>
                </div>

                
        

</div>
  )
}

export default Home