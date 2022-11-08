// Write your code here.

import React, { Component } from 'react'
import FaqItem from '../FaqItem'

class Faqs extends Component {
    state = {
        value: false,
        answerText: "",
    }

    render(props) {
        const { faqsList } = this.props
        const { value, answerText } = this.state

        const showToggle = (id) => {
            this.setState({
                value: id,
                answerText: faqsList[id].answerText
            })
        }
        const NoToggle = (id) => {
            this.setState({
                value: false,
            })
        }

        return (
            <div className="flex flex-row justify-center items-center h-screen text-center p-4 bg-gray-200">
                <div className="flex flex-col justify-center items-center w-100 h-100 rounded-xl p-8 card shadow bg-white">
                    <h1 className="text-3xl text-yellow-500 font-bold">FAQS</h1>
                    <div className="m-4">
                        {faqsList.map(eachItem => (
                            <FaqItem answerText={answerText} NoToggle={NoToggle} check={this.check} key={eachItem.id} showToggle={showToggle} faqsList={eachItem} value={value === eachItem.id} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Faqs