

import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

import AppStore from '../../src/Projects/AppStore/AppStore'
import SimpleTodo from '../../src/Projects/SimpleTodo/SimpleTodos'
import BrowserHistoryApp from '../Projects/BrowserHistoryApp/BrowserHistoryApp'
import GoogleSearchApp from '../Projects/GoogleSearchApp/GoogleSuggestions'
import Gallery from '../Projects/GalleryApp/Gallery'
import CoinToss from '../Projects/CoinTossGame/CoinToss'
import Comments from '../Projects/CommentsApp/Comments'
import MoneyManager from '../Projects/MoneyManager/MoneyManager'
import ReviewsApp from '../Projects/ReviewsApp/ReviewsApp'
import Appointments from '../Projects/AppontmentApp/Appointments'
import FaqApp from '../Projects/FaqApp/FaqApp.js'
import PasswordManager from '../Projects/PasswordManager/PasswordManager'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]


  const ProjectList = [
    {
      id: 1,
      name: 'AppStore',
    }
  ]



function ViewProject() {


  const navigate = useNavigate()
  const location = useLocation()
  const {pathname} = location
  const path = pathname.split('/')[2]
  console.log(path)
  // if (path === 'AppStore') {
  //   return <AppStore />
  // }


  return (
    <div>
      {ProjectList.map((project) => {
        if (path === 'AppStore') {
          return <AppStore />
        }
        if (path === 'SimpleTodos') {
          return <SimpleTodo />
        }
        if (path === 'GoogleSearchApp') {
          return <GoogleSearchApp suggestionsList={suggestionsList} />
        }
        if (path === 'BrowserHistoryApp') {
          return <BrowserHistoryApp />
        }
        if (path === 'GalleryApp') {
          return <Gallery />
        }
        if (path === 'CoinTossGame') {
          return <CoinToss />
        }
        if (path === 'CommentsApp') {
          return <Comments />
        }
        if (path === 'MoneyManager') {
          return <MoneyManager />
        }
        if (path === 'ReviewsApp') {
          return <ReviewsApp />
        }
        if (path === 'AppointmentsApp') {
          return <Appointments />
        }
        if (path === 'FAQs') {
          return <FaqApp />
        }
        if (path === 'PasswordManager') {
          return <PasswordManager />
        }

        
        
      
      }
      )}
    </div>
  )
}

export default ViewProject

// h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10
