

import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


import AppStore from '../../src/Projects/AppStore/AppStore'
import SimpleTodo from '../../src/Projects/SimpleTodo/SimpleTodos'

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
      
      }
      )}
    </div>
  )
}

export default ViewProject