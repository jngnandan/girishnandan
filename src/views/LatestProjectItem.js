
import React from 'react'

import {Link, redirect} from 'react-router-dom'

function LatestProjectItem(props) {

  const {id, name, image, title, url} = props.projectDetails

const RedirectLink = () => {
    redirect(`${url}`)
}

  return (
        <a href={url} target="_blank">
    <div className="bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center">
      <img src={image} alt={name} className='w-full h-44 md:h-60 object-scale-down rounded-lg' />
    </div>
    </a>
  )
}

export default LatestProjectItem