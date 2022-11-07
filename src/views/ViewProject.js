

import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
// h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10

import AppStore from '../../src/Projects/AppStore/AppStore'
import SimpleTodo from '../../src/Projects/SimpleTodo/SimpleTodos'
import BrowserHistoryApp from '../Projects/BrowserHistoryApp/BrowserHistoryApp'
import GoogleSearchApp from '../Projects/GoogleSearchApp/GoogleSuggestions'
 


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
        
        
      
      }
      )}
    </div>
  )
}

export default ViewProject