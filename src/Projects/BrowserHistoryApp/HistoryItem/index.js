
import React from 'react'

const HistoryItem = (props) => {
    const { historyList, deleteHistory, key } = props
    const { id, timeAccessed, logoUrl, title, domainUrl } = historyList

    const deleteItem = () => {
        deleteHistory(id)
    }

    return (
        <li className={`${id} key flex flex-auto justify-between py-4`}>
            <p className="ml-2">{timeAccessed}</p>
            <div className="flex flex-1 pl-12">
                <img className="w-6 mr-2 h-min" alt="app logo" src={logoUrl} />
                <p className="mr-2 text-left">{title}</p>
                <p className="text-gray-500">{domainUrl}</p>
            </div>

            <button testid="delete" onClick={deleteItem} className="ml-4 pl-8 pr-5"><img alt="delete" src="https://assets.ccbp.in/frontend/react-js/delete-img.png" /></button>
        </li>
    )
}

export default HistoryItem