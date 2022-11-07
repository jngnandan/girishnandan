// Write your code here

import React from 'react'

const TodoItem = (props) => {
    const { stateList, deleteList, key } = props
    const { id, title } = stateList

    const deleteItem = () => {
        deleteList(id)
    }

    return (
        <li className={`{id flex flex-row justify-between items-center content-center}`}>
            <p value={title} className="font-medium title">{title}</p>
            <button type="button" onClick={deleteItem} className="border-2 border-orange-600 hover:border-orange-400 rounded py-1.5 px-4 m-2">Delete</button>
        </li>
    )
}

export default TodoItem