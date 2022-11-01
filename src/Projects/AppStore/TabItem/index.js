// Write your code here

import React, { Component } from 'react'

export class TabItem extends Component {
    state = { decoration: "" }
    render(props) {
        const { tabsList, updateTab, isTabActive } = this.props
        const { tabId, displayText } = tabsList
        const { decoration } = this.state

        const tabChange = () => {
            updateTab(tabId)
        }

        return (
            <div>
                {isTabActive ? <button onClick={tabChange} className={`w-16 text-gray-600 font-semibold underline`} value={tabId}>{displayText}</button>
                    :
                    <button onClick={tabChange} className={`w-16 text-gray-600 font-semibold`} value={tabId}>{displayText}</button>
                }
            </div>
        )
    }
}

export default TabItem