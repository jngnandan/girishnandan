// Write your code here.


import React, { Component } from 'react'

export class ThumbnailItem extends Component {
    render(props) {
        const { imagesList, changeSlide, isActive } = this.props
        const { id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText } = imagesList

        const changeImage = () => {
            changeSlide(id)
        }

        return (
            <div>
                {isActive ?
                    <button onClick={changeImage}>
                        <img className='m-1 object-contain' alt={thumbnailAltText} src={thumbnailUrl} />
                    </button> :
                    <button onClick={changeImage}>
                        <img className='m-1 opacity-20 object-contain' alt={thumbnailAltText} src={thumbnailUrl} />
                    </button>
                }
            </div>

        )
    }
}

export default ThumbnailItem