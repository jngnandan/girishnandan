import React, { Component } from 'react'

const listItems = {
    minutes: 25,
    seconds: 59,
    value: true,
}

class DigitalTimer extends Component {
    state = listItems

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000)
    }
    tick = () => {
        const { seconds, minutes } = this.state
        this.setState({
            seconds: seconds - 1
        })
        if (seconds === 1) {
            this.setState({
                seconds: 59,
                minutes: minutes - 1
            })
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    startPause = () => {
        const { value } = this.state
        console.log("start pause")
        this.setState(prevState => {
            const { value } = this.state
            return {
                value: !value
            }
        })
        value ? clearInterval(this.timerID) : this.componentDidMount()
    }

    minusTimer = () => {
        this.setState(prevState => ({
            minutes: prevState.minutes - 1,
            seconds: 59
        }))
    }
    plusTimer = () => {
        this.setState(prevState => ({
            minutes: prevState.minutes + 1,
            seconds: 59
        }))
    }

    resetTime = () => {
        this.setState(prevState => ({
            minutes: 25,
            seconds: 59
        }))
    }


    render() {
        const { seconds, value, minutes } = this.state
        return (
            <div className="bg-gradient-to-l from-sky-100 to-green-200 h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10 flex flex-col justify-center items-center h-screen text-center">
                <h1 className="text-3xl font-bold pb-10">Digital Timer</h1>

                <div className="flex flex-row items-center ">
                    <div className="flex flex-row ">
                        <div className="m-8 bg-white rounded-full p-12">
                            <h1 className="text-3xl font-bold p-2 text-gray-500">{minutes}:{seconds}</h1>
                            {value ? <p className='font-medium'>Running</p> : <p className='font-medium'>Pause</p>}
                        </div>

                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-row">
                            <button onClick={this.startPause} className='flex flex-row items-center pr-4'>
                                {!value ? <img className='w-6' src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" /> :
                                    <img className='w-6' src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" />}

                                {value ? <p className='font-bold pl-2'>Start</p> : <p className='font-bold pl-2'>Pause</p>}
                            </button>
                            <button onClick={this.resetTime} className='flex flex-row items-center'>
                                <img className='w-6' src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" />
                                <p className='font-bold pl-2'>Reset</p>
                            </button>
                        </div>
                        <p className='text-sm pt-4'>Set Timer limit</p>
                        <div className='flex flex-row'>
                            <button onClick={this.minusTimer} className='font-bold text-2xl'>-</button>
                            <button className='m-3 bg-green-500 px-6 py-2 rounded text-white font-bold'>{minutes+1}</button>
                            <button onClick={this.plusTimer} className='font-bold text-2xl'>+</button>
                        </div>
                    </div>

                </div>

            </div >
        )
    }
}

export default DigitalTimer