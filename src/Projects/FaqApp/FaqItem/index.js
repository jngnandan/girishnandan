import React from 'react'
import { Component } from 'react'

class FaqItem extends Component {
    state = {
        switcher: false,
    }

    render(props) {
        const { faqsList, value, showToggle, NoToggle, answerText } = this.props
        const { id, questionText } = faqsList
        const { switcher } = this.state

        const toggle = () => {
            switcher ? showToggle(id) : NoToggle(id)

            this.setState(prevState => {
                const { switcher } = prevState
                return {
                    switcher: !switcher
                }
            })
        }

        return (
            <div className='w-96 py-6 px-4 border-2 border-gray-300 rounded-xl m-4' >
                <div className="flex flex-row justify-between">
                    <h1 className='font-bold text-gray-500 text-left w-72'>{questionText}</h1>
                    {!value ? <button value={id} onClick={toggle}><img className='w-8' src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" /></button> :
                        <button value={id} onClick={toggle}><img className='w-8' src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" /></button>}
                </div>
                {value && <div className='pt-5'>
                    <p className='text-gray-500 text-left w-100'>{answerText}</p>
                </div>}
            </div>
        )

    }

}

export default FaqItem