
import React from 'react'

import SimpleTodos from '../Projects/SimpleTodo/SimpleTodos'


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

import ProjectItem from '../views/ProjectItem'
import LatestProjectItem from '../views/LatestProjectItem'


import {Link} from 'react-router-dom'

import SSG_Security from '../assets/images/SSG_Security.gif'
import SecurityManagementApp from '../assets/images/SecurityManagementApp.gif'



const ListOfProjects = [
    // {
    //     id: 1,
    //     name: 'Destination Search',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/destination-search-output-v2.gif',
    //     title: 'DestinationSearch',
    // },
    {
        id: 2,
        name: 'Simple Todo',
        image: 'https://assets.ccbp.in/frontend/content/react-js/simple-todos-output.gif',
        title: 'SimpleTodos',
    },
    {
        id: 3,
        name: 'CashWithdrawal',
        image: 'https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-output-v2.gif',
        title: 'CashWithdrawal',
    },
    {
        id: 4,
        name: 'Google Search App',
        image: 'https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif',
        title: 'GoogleSearchApp',
    },
    {
        id: 5,
        name: 'Browser History App',
        image: 'https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif',
        title: 'BrowserHistoryApp',
    },
    {
        id: 6,
        name: 'Gallery App',
        image: 'https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif',
        title: 'GalleryApp',
    },
    {
        id: 7,
        name: 'App Store',
        image: 'https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif',
        title: 'AppStore',
    },
    {
        id: 8,
        name: 'Coin Toss Game',
        image: 'https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-output.gif',
        title: 'CoinTossGame',
    },
    {
        id: 9,
        name: 'Reviews App',
        image: 'https://assets.ccbp.in/frontend/content/react-js/reviews-app-output.gif',
        title: 'ReviewsApp',
    },
    {
        id: 10,
        name: 'Comments App',
        image: 'https://assets.ccbp.in/frontend/content/react-js/comments-app-output.gif',
        title: 'CommentsApp',
    },
    {
        id: 11,
        name: 'Appointments App',
        image: 'https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif',
        title: 'AppointmentsApp',
    },
    {
        id: 12,
        name: 'Money Manager',
        image: 'https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif',
        title: 'MoneyManager',
    },
    {
        id: 13,
        name: 'Digital Timer',
        image: 'https://assets.ccbp.in/frontend/content/react-js/digital-timer-output.gif',
        title: 'DigitalTimer',
    },
    {
        id: 14,
        name: 'FAQs',
        image: 'https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif',
        title: 'FAQs',
    },
    {
        id: 15,
        name: 'Password Manager',
        image: 'https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif',
        title: 'PasswordManager',
    },
    {
        id: 16,
        name: 'Fetching and Routing',
        image: 'https://assets.ccbp.in/frontend/content/react-js/routing-practice-blog-list-desktop-output.gif',
        title: 'FetchingAndRouting',
    },
    // {
    //     id: 17,
    //     name: 'Cryptocurrency Tracker',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif',
    //     title: 'CryptocurrencyTracker',
    // },
    // {
    //     id: 18,
    //     name: 'IPL Dashboard',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif',
    //     title: 'IPLDashboard',
    // },
    // {
    //     id: 19,
    //     name: 'Nxt Trendz Authorisation',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-authorisation-output-v2.gif',
    //     title: 'NxtTrendzAuthorisation',
    // },
    // {
    //     id: 20,
    //     name: 'Events',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/events-output.gif',
    //     title: 'Events',
    // },
    // {
    //     id: 21,
    //     name: 'Github Popular Repos',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/github-popular-repos-output.gif',
    //     title: 'GithubPopularRepos',
    // },
    // {
    //     id: 22,
    //     name: 'Nxt Trendz Product Details',
    //     image: 'https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-output-v0.gif',
    //     title: 'NxtTrendzProductDetails',
    // },

]
 
const LatestProjects = [
    {
        id: 1,
        name: 'Nxt Trendz Product Details',
        // image: 'https://imgur.com/a/BaJwpYa',
        image: 'https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-product-details-output-v0.gif',

        title: 'NxtTrendzProductDetails',
        url: 'https://nxt-trends.vercel.app/'
    },
     {
        id: 2,
        name: 'Jobby',
        // image: 'https://imgur.com/a/Yr4Z2tT',
        image: 'https://i.imgur.com/drnRCGX.gif',

        title: 'Jobby',
        url: 'https://jobbyapp.vercel.app/'
    },
    {
        id: 3,
        name: 'Nxt Watch',
        // image: 'https://imgur.com/a/Yr4Z2tT',
        image: 'https://i.imgur.com/r7OWflr.gif',

        title: 'Nxt Watch',
        url: 'https://nxt-six.vercel.app/'
    },
    {
        id: 4,
        name: 'Movie App',
        // image: 'https://imgur.com/a/Yr4Z2tT',
        image: 'https://i.imgur.com/kBtncRS.jpeg',

        title: 'Movie App',
        url: 'https://movie-app-self-two.vercel.app/login'
    }

]



function Home() {
  return (
    <div>
        {/* Header */}
        <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <h1 className='text-3xl text-white font-semibold'>Hi 👋, I'm Girish Nandan</h1>
        <h2 className='text-3xl text-white font-light'>I'm a Frontend Developer</h2>

        <div>
            <p className='text-white mt-6 font-light'>
Hello! My name is Girish Nandan, and I am a recent graduate with a Masters in Marketing and User Experience. While studying, I discovered my passion for Frontend Development and how it plays a crucial role in delivering exceptional digital experiences.
<br/>
<br/>
I have been working to build interactive web applications that are responsive and user-friendly. During my time working as a Frontend Developer, I have gained a deep understanding of HTML, CSS, JavaScript, and other related technologies, including React, Node.js.
<br/>
<br/>
While working on these projects, I also realized the importance of DevOps and how it plays a vital role in the development lifecycle. As a result, I have been learning more about DevOps practices and tools, including Git, Jenkins, Docker, and Kubernetes.
<br/>
I am excited to continue honing my skills in both Frontend Development and DevOps, and to create innovative solutions that blend user experience with technology.      
      </p>
        </div>
        {/* My Skills */}
        <div className='grid grid-cols-6 md:grid-cols-9 lg:grid-cols-9 gap-4 mt-10'>
            <button data-tip data-for="Html" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <AiFillHtml5 className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="Css" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <FaCss3Alt className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="Bootstrap" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <FaBootstrap className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="Tailwind" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiTailwindcss className='text-3xl text-gray-900'/>
            </button>

            <button data-tip data-for="Javascript" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiJavascript className='text-2xl text-gray-900'/>
            </button>

            <button data-tip data-for="React" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiReact className='text-3xl text-gray-900'/>
            </button>

            <button data-tip data-for="SQLite" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiSqlite className='text-3xl text-gray-900'/>
            </button>

            <button data-tip data-for="Node" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <GrNode className='text-3xl text-gray-900'/>
            </button>
            <button data-tip data-for="ReactNative" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
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
            <div data-tip data-for="Illustrator" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiAdobeillustrator className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Photoshop" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiAdobephotoshop className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Sketch" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiSketch className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Figma" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiFigma className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="XD" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiAdobexd className='text-3xl text-gray-900'/>
            </div>
            <div data-tip data-for="Material Design" className='flex items-center hover:bg-gray-400 justify-center bg-gray-500 rounded-full h-12 w-12'>
                <SiMaterialdesign className='text-3xl text-gray-900'/>
            </div>

            <ReactTooltip id='Illustrator' place='top' effect='solid'>
                Illustrator
            </ReactTooltip>
            <ReactTooltip id='Photoshop' place='top' effect='solid'>
                Photoshop
            </ReactTooltip>
            <ReactTooltip id='Sketch' place='top' effect='solid'>
                SketchApp
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
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10'>
                                 <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                     <h1 className="text-5xl">📐</h1>
                                     <h1 className='text-white font-semibold text-lg mt-3'>Product Design</h1>
                                     {/* <p className='text-white font-light text-sm mt-2 text-center'>From UI, UX to Usability testing and Design systems</p> */}
                                 </div>
                                 <div className='bg-gray-900 p-5 rounded-lg flex flex-col justify-center items-center'>
                                     <h1 className="text-5xl">🧑🏽‍💻</h1>
                                    <h1 className='text-white font-semibold text-lg mt-3 text-center'>Frontend Development</h1>
                                    {/* <p className='text-white font-light text-sm mt-2 text-center'>More React, SQLite, Node.js, Firebase, React Native projects are coming soon!</p> */}
                                 </div>
                                 
                         </div>
                 </div>
                {/* Latest Projects */}
                <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'><span className="font-light">Recent</span> Projects 🚀</h1>

                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        {LatestProjects.map(eachProject => (
                            <LatestProjectItem key={eachProject.id} projectDetails={eachProject}/>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'><span className="font-light">Feature</span> Projects 🚀</h1>

                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                        {ListOfProjects.map(eachProject => (
                            <ProjectItem key={eachProject.id} projectDetails={eachProject}/>
                        ))}
                    </div>

                </div>
                 {/* Recent Projects */}
                 <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'><span className="font-light">Recent</span> Projects 📑 </h1>

                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                    <a href='https://ssg-services.vercel.app/'>
                            <div className="bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center">
                            <img className='w-full h-44 md:h-60 object-scale-down rounded-lg' src={SSG_Security} />
                            </div>
                    </a>
                    </div>
                </div>

                {/* Ongoing Projects */}
                <div className='bg-gray-900 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                    <h1 className='text-3xl text-white font-semibold'><span className="font-light">Ongoing</span> Projects 📌 </h1>

                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                    <a href='https://security-management-app.vercel.app/'>
                            <div className="bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center">
                            <img className='w-full h-44 md:h-60 object-scale-down rounded-lg' src={SecurityManagementApp} />
                            </div>
                    </a>
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
