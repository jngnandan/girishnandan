import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react'
import CommentItem from '../CommentItem'


const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const commentList = [
  {
    id: uuidv4(),
    title: "John",
    commentText: "This is cool",
    isActive: false,
  },
]

export class Comments extends Component {
  state = {
    currentList: commentList,
    title: "",
    commentText: "",
    isActive: null,
  }
  addComment = (event) => {
    event.preventDefault();
    console.log("Add comment")
    const { id, title, commentText, isActive } = this.state

    const newComment = {
      id: uuidv4,
      title,
      commentText,
      isActive,
    }

    this.setState(prevState => ({
      currentList: [...prevState.currentList, newComment],
      title: '',
      commentText: '',
      isActive: ''
    }))

  }

  commentTitle = (event) => {
    this.setState({ title: event.target.value })
    // console.log(this.state.title)
  }
  commentText = (event) => {
    this.setState({ commentText: event.target.value })
    // console.log(this.state.commentText)
  }
  LikeComment = () => {
    {
      this.state.isActive ?
        this.setState({ isActive: false }) :
        this.setState({ isActive: true })
    }
  }

  deleteComment = (id) => {
    const { currentList } = this.state
    this.setState({ currentList: currentList.map(eachitem => (eachitem.id !== id)) })

  }




  render() {
    const { currentList, isActive } = this.state
    const { id } = currentList


    return (
      <div className='flex flex-col h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <div className='flex flex-row justify-start items-center px-6 pt-10'>
          <form onSubmit={this.addComment} className='flex flex-col justify-start items-start'>
            <h1 className='text-3xl font-bold'>Comments</h1>
            <p className='my-2'>Say something about 4.0 Technologies</p>
            <input onChange={this.commentTitle} className='text py-2 pl-2 pr-12 rounded border-2 border-gray-500' placeholder='Comment' />
            <textarea onChange={this.commentText} placeholder='Explain here' className='pl-2 pr-6 border-2 border-gray-500 mt-2 rounded' id="txtid" name="txtname" rows="4" cols="25" maxlength="200">
            </textarea>
            <button className='bg-blue-500 hover:bg-teal-600 py-2 px-4 rounded text-white shadow mt-2'>Add Comment</button>
          </form>

          <img className='ml-6' src='https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png' />
        </div>

        <div className='flex flex-row ml-8 mt-4 justify-start items-center'>
          <button className='w-8 h-8 bg-blue-500 mr-2 rounded-sm'>{currentList.length}</button>
          <p>Comments</p>
        </div>

        <ul>
          {currentList.map(eachitem => (
            <li className='mx-8 my-4 border-2 rounded border-gray-500 p-4 flex flex-row justify-between w-96'>
              <div>
                <div className='mb-2 flex flex-row justify-start items-center'>
                  {/* <button className='mr-2 h-10 w-10 rounded-full bg-blue-500'>S</button> */}
                  <h1 className='font-bold text-gray-500'>{eachitem.title}</h1>
                </div>
                <p>{eachitem.commentText}</p>
                {currentList.length ?
                  <button onClick={this.LikeComment}><img className='w-6 mt-1 ml-2' src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" /></button> :
                  <button onClick={this.LikeComment}><img className='w-6 mt-1 ml-2' src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png" /></button>
                }
              </div>

              <button value={id} onClick={this.deleteComment}>
                <img className='h-6' src='https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png' />
              </button>
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

export default Comments