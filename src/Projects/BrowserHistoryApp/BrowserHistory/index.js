
import React, { Component } from 'react'
import HistoryItem from '../HistoryItem';

class BrowserHistory extends Component {

    constructor(props) {
        super(props);
        const { initialHistoryList } = this.props

        this.state = {
            searchValue: "",
            historyList: initialHistoryList
        }
    }
    searchHistory = (event) => {
        const { searchValue, historyList } = this.state
        const { initialHistoryList } = this.props
        const filteredValue = initialHistoryList.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

        this.setState({
            searchValue: event.target.value,
            historyList: filteredValue
        })
        console.log(searchValue)
    }

    deleteHistory = (id) => {
        const { historyList } = this.state

        console.log("delete")
        this.setState({
            historyList: historyList.filter(Item => Item.id !== id)
        })
    }

    render(props) {
        const { historyList, searchValue } = this.state
        const { initialHistoryList } = this.props


        return (
            <div className="flex flex-col justify-start text-center h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10">
                <div className="pl-6 h-20 bg-blue-500 py-3 w-full fix-top flex flex-row justify-around items-center align-middle">
                    <h1 className="font-bold text-white text-2xl text-left mr-20">HISTORY</h1>
                    <div className="flex flex-row justify-center">
                        <img className="bg-blue-600 p-2 rounded mr-1" src="https://assets.ccbp.in/frontend/react-js/search-img.png" />
                        <input value={searchValue} onChange={this.searchHistory} placeholder="Search" type="search" className="placeholder-gray-200 py-2 rounded px-8 bg-blue-600 text-gray-200" />
                    </div>
                    <div className="w-40"></div>
                </div>
                <div className="w-100 pl-10 pr-10 ">
                    {historyList == 0 ?
                        <div className="flex flex-col justify-center items-center h-screen">
                            <p className="text-xl text-gray-600">There is no history to show</p>
                        </div>
                        :
                        <div className="card rounded shadow mb-10 pr-6 mt-6 p-6 flex flex-wrap justify-center items-center">
                            <div className="flex flex-col w-full">
                                {historyList.map(eachItem => (
                                    <HistoryItem deleteHistory={this.deleteHistory} historyList={eachItem} key={eachItem.key} />
                                ))}
                            </div>
                        </div>
                    }
                </div>

                <div>
                </div>
            </div>
        )
    }
}

export default BrowserHistory