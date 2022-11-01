
import React from 'react'

import {Link} from 'react-router-dom'

function ProjectItem(props) {

  const {id, name, image, title} = props.projectDetails

  return (
    <Link to={`/projects/${title}`}>
    <div className="bg-gray-800 p-5 rounded-lg flex flex-col justify-center items-center">
      <img src={image} alt={name} className='w-full h-44 md:h-60 object-scale-down rounded-lg' />
    </div>
    </Link>
  )
}

export default ProjectItem