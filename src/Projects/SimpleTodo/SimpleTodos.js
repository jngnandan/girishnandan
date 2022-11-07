import React, { Component } from 'react'
import TodoItem from './TodoItem'


const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    stateList: initialTodosList,
  }


  render() {

    const deleteList = (id) => {
      const { stateList } = this.state

      this.setState({
        stateList: stateList.filter(eachItem => eachItem.id !== id)
      })
    }

    const { stateList } = this.state
    return (
      <div className="bg-orange-300 p-12 h-screen flex flex-row justify-center items-center text-center h-screen bg-cover overflow-auto	 p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10">
        <div className="card bg-white p-8 px-16 w-full rounded">
          <h1 className="text-3xl font-bold text-orange-300 p-3">Simple Todos</h1>

          <ul>
            {stateList.map(eachItem => (
              <TodoItem deleteList={deleteList} stateList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos