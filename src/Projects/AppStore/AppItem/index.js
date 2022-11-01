// Write your code here

import React, { Component } from 'react'

export class AppItem extends Component {
    render(props) {
        const { appsList } = this.props
        const { appId, appName, imageUrl, category } = appsList
        return (
            <div className='w-28 h-32 rounded p-3 shadow bg-white flex flex-col justify-start items-center m-2 pt-4'>
                <img className='w-16 rounded' src={imageUrl} />
                <p className='pt-2 text-sm font-semibold text-center'>{appName}</p>
            </div>
        )
    }
}

export default AppItem