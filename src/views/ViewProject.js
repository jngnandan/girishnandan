

import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


import AppStore from '../../src/Projects/AppStore/AppStore'

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
        if (path === project.name) {
          return <AppStore />
        }
      }
      )}
    </div>
  )
}

export default ViewProject