// Write your JS code here

import React, { Component } from 'react'

import {useNavigate, useLocation} from 'react-router-dom'
// import { useParams } from 'react-router-dom'

export class BlogitemDetails extends Component {
    state = {
        blogData: {},
        isLoading: true,
    }

 

    componentDidMount() {
        this.getBlogItemData(this.props)
    }
    getBlogItemData = async () => {
        const navigate = useNavigate()
        const location = useLocation()
        const {pathname} = location
        const id = pathname.split('/')[2]
        console.log(id)
     

        const response = await fetch(`https://apis.ccbp.in/blogs/:{id}`)
        const statusCode = await response.statusCode
        const data = await response.json()

        const updatedData = {
            id: data.id,
            title: data.title,
            imageUrl: data.image_url,
            avatarUrl: data.avatar_url,
            author: data.author,
            content: data.content,
            topic: data.topic,
        }
        this.setState({ blogData: updatedData, isLoading: false, })
    }

    render(props) {
        const { blogData } = this.state
        const {
            id,
            title,
            mageUrl,
            atarUrl,
            author,
            content,
            topic,
        } = blogData

        return (
            <div>
            <h1>{title}</h1>
            </div>
        )
    }
}

export default BlogitemDetails
