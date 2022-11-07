

import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


import AppStore from '../../src/Projects/AppStore/AppStore'
import SimpleTodo from '../../src/Projects/SimpleTodo/SimpleTodos'
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
        
        
      
      }
      )}
    </div>
  )
}

export default ViewProject