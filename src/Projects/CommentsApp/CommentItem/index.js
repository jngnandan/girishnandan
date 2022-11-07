
import React from 'react'

export default function CommentItem(props) {
    const { stateList, deleteList, key } = props
    const { id, title, commentText, isActive } = stateList

    const deleteItem = () => {
        deleteList(id)
    }

    return (
        <li className={`{id flex flex-row justify-between items-center content-center w-min}`}>
            <p value={title} className="font-medium title">{title}</p>
            <p value={commentText} className="font-medium title">{commentText}</p>
            <button type="button" onClick={deleteItem} className="border-2 border-blue-600 hover:border-blue-400 rounded py-1.5 px-4 m-2">Delete</button>
        </li>
    )
}
