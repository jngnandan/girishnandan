// Write your code here


import React, { Component } from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
    state = {
        money: 0,
    }

    deposiMoney = (value) => {
        const { money } = this.state
        console.log("add money")
        this.setState({
            money: money + value
        })
    }


    render(props) {
        const { money } = this.state
        const { denominationsList } = this.props
        const { id, value } = denominationsList

        return (
            <div className="h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-20 bg-gray-700 text-white h-screen flex flex-row p-16 justify-center items-center h-screen text-center">
                <div className="card bg-gray-800 rounded-xl p-4 py-20 px-16">
                    <div className="flex flex-row items-center">
                        <div className="card bg-blue-500 rounded-full w-6 h-6 p-8 flex flex-col justify-center items-center text-3xl">S</div>
                        <h1 className="pl-6 text-2xl font-medium">Sarah Williams</h1>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="ont-medium">Your Balance</p>
                        <div>
                            <h1 className="text-3xl font-medium">{money}</h1>
                            <p className="font-medium">In Rupees</p>
                        </div>
                    </div>
                    <h1 className="text-2xl mt-4 font-medium text-left ont-medium">Withdraw</h1>
                    <p className="text-left mt-1 my-3 font-medium">CHOOSE SUM (IN RUPEES)</p>
                    <div className="grid grid-cols-2 m-8 lg:px-44">
                        {denominationsList.map(eachItem => (
                            <DenominationItem deposiMoney={this.deposiMoney} denominationsList={eachItem} key={eachItem.id} />
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}

export default CashWithdrawal