
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

import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {AiFillMediumSquare} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'

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
        <div className='grid grid-cols-6 md:grid-cols-9 lg:grid-cols-9 gap-4 mt-10'>
            <button data-tip data-for="Html" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <AiFillHtml5 className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="Css" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <FaCss3Alt className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="Bootstrap" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <FaBootstrap className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="Tailwind" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiTailwindcss className='text-3xl text-gray-900'/>
            </button>

            <button data-tip data-for="Javascript" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiJavascript className='text-2xl text-gray-900'/>
            </button>

            <button data-tip data-for="React" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiReact className='text-3xl text-gray-900'/>
            </button>

            <button data-tip data-for="SQLite" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiSqlite className='text-3xl text-gray-900'/>
            </button>

            <button data-tip data-for="Node" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <GrNode className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="ReactNative" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <TbBrandReactNative className='text-3xl text-gray-900'/>
            </button>
            <ReactTooltip id='Html' place='top' effect='solid'>
                HTML
            </ReactTooltip>
            <ReactTooltip id='Css' place='top' effect='solid'>
                CSS
            </ReactTooltip>
            <ReactTooltip id='Bootstrap' place='top' effect='solid'>
                Bootstrap
            </ReactTooltip>
            <ReactTooltip id='Tailwind' place='top' effect='solid'>
                Tailwind
            </ReactTooltip>
            <ReactTooltip id='Javascript' place='top' effect='solid'>
                Javascript
            </ReactTooltip>
            <ReactTooltip id='React' place='top' effect='solid'>
                React.js
            </ReactTooltip>
            <ReactTooltip id='SQLite' place='top' effect='solid'>
                SQLite
            </ReactTooltip>
            <ReactTooltip id='Node' place='top' effect='solid'>
                Node.js
            </ReactTooltip>
            <ReactTooltip id='ReactNative' place='top' effect='solid'>
                React Native
            </ReactTooltip>
        </div>

        {/* Design Skills */}
        <div className='grid grid-cols-6 md:grid-cols-9 lg:grid-cols-9 gap-4 mt-10'>
            <div data-tip data-for="Illustrator" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiAdobeillustrator className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Photoshop" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiAdobephotoshop className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Sketch" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiSketch className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Figma" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiFigma className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="XD" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiAdobexd className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Material Design" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <SiMaterialdesign className='text-3xl text-gray-900'/>
            </div>

            <ReactTooltip id='Illustrator' place='top' effect='solid'>
                Illustrator
            </ReactTooltip>
            <ReactTooltip id='Photoshop' place='top' effect='solid'>
                Photoshop
            </ReactTooltip>
            <ReactTooltip id='Sketch' place='top' effect='solid'>
                Sketch
            </ReactTooltip>
            <ReactTooltip id='Figma' place='top' effect='solid'>
                Figma
            </ReactTooltip>
            <ReactTooltip id='XD' place='top' effect='solid'>
                Adobe XD
            </ReactTooltip>
            <ReactTooltip id='Material Design' place='top' effect='solid'>
                Material Design
            </ReactTooltip>
        </div>
        <hr className='border-gray-600 mt-10'/>
               {/* Social Media */}
        <div className='grid grid-cols-6 md:grid-cols-9 lg:grid-cols-9 gap-4 mt-10'>
            <button data-tip data-for="Github" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <a href='https://github.com/jngnandan/' target='_blank' rel='noreferrer'>
                <FaGithub className='text-3xl text-gray-900'/>
                </a>
            </button>
            <button data-tip data-for="Linkedin" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <a href='https://www.linkedin.com/in/jngnandan/' target='_blank' rel='noreferrer'>
                <FaLinkedin className='text-3xl text-gray-900'/>
                </a>
            </button>
            <button data-tip data-for="Twitter" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <a href='https://twitter.com/girish_nandanj' target='_blank' rel='noreferrer'>
                <FaTwitter className='text-3xl text-gray-900'/>
                </a>
            </button>
            <button data-tip data-for="Medium" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <a href="https://medium.com/@jngnandan" target='_blank' rel='noreferrer'>
                <AiFillMediumSquare className='text-3xl text-gray-900'/>
                </a>
            </button>
            <button data-tip data-for="Behance" className='flex items-center hover:bg-gray-400 justify-center bg-gray-600 rounded-full h-12 w-12'>
                <a href="https://www.behance.net/nandanj" target='_blank' rel='noreferrer'>
                <FaBehance className='text-3xl text-gray-900'/>
                </a>
            </button>
            
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

        {/* Footer */}
                <div className='bg-gray-800 p-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex flex-row justify-center items-center'>
                            {/* <h1 className='text-white text-2xl font-bold'>Girish Nandan</h1> */}
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <p className='text-white text-sm'>© 2022 Girish Nandan. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                
        

</div>
  )
}

export default Home