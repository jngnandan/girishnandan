import React, { Component } from 'react'
import TransactionItem from '../TransactionItem'
import { v4 as uuidv4 } from 'uuid';
import MoneyDetails from '../MoneyDetails';


const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const historyList = [
  {
    id: uuidv4(),
    title: "Salary",
    amount: 10000,
    type: "Income",
  },
]


export class MoneyManager extends Component {
  state = {
    currentList: historyList,
    title: "",
    amount: "",
    type: "",
    balace: 0,
    expenses: 0,
    income: 0,
  }
  addTransaction = (event) => {
    event.preventDefault();
    const { title, amount, type, currentList } = this.state

    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      currentList: [...prevState.currentList, newTransaction],
      title: "",
      amount: "",
      type: "",
      
      balace: type === "Income" ? prevState.balace + Number(amount) : prevState.balace - Number(amount),
      expenses: type === "Expenses" ? prevState.expenses + Number(amount) : prevState.expenses,
      income: type === "Income" ? prevState.income + Number(amount) : prevState.income,

    }))
  }


  addTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  addAmount = (event) => {
    this.setState({ amount: event.target.value })
  }
  addType = (event) => {
    this.setState({ type: event.target.value })
  }

  deleteTransaction = (id) => {
    console.log(id)
    this.setState(prevState => ({
      currentList: prevState.currentList.filter(eachitem => (
        eachitem.id !== id
      ))
    }))
  }

  render() {
    const { currentList } = this.state
    return (
      <div className='flex flex-col justify-start items-center px-6 h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
        <div className='bg-blue-100 py-8 w-full rounded p-4 mt-2'>
          <h1 className='font-semibold text-gray-700 text-xl'>Hi, Richard</h1>
          <p className='text-gray-500'>Welcome back to your <span className='text-blue-500'>Money Manger</span></p>
        </div>

        <div className='grid grid-cols-3 gap-1 w-full m-2'>
          <div className='m-2 py-2 px-2 bg-teal-100 border-2 border-teal-300 rounded flex flex-row justify-center items-center'>
            <img className='w-10' src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" />
            <div className='pl-2'>
              <p className='text-sm text-gray-500'>Your Balance</p>
              <h1 className='text-gray-500'>Rs {this.state.balace}</h1>
            </div>
          </div>

          <div className='m-2 py-2 px-2 bg-teal-100 border-2 border-teal-300 rounded flex flex-row justify-center items-center'>
            <img className='w-10' src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" />
            <div className='pl-2'>
              <p className='text-sm text-gray-500'>Your Expenses</p>
              <h1 className='text-gray-500'>Rs {this.state.expenses}</h1> 
            </div>
          </div>

          <div className='m-2 py-2 px-2 bg-purple-100 border-2 border-purple-300 rounded flex flex-row justify-center items-center'>
            <img className='w-10' src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" />
            <div className='pl-2'>
              <p className='text-sm text-gray-500'>Your Income</p>
              <h1 className='text-gray-500'>Rs {this.state.income}</h1> 
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-4 w-full'>
          <form onSubmit={this.addTransaction} className='shadow py-3 px-5 rounded h-80'>
            <h1 className='font-semibold text-gray-700 text-xl'>Add Transaction</h1>
            <div className='flex flex-col m-1'>
              <label className='text-sm text-gray-500'>TITLE</label>
              <input onChange={this.addTitle} type="text" placeholder='TITLE' className='py-2 px-4 rounded border-2 border-gray-300 text-sm' />
            </div>
            <div className='flex flex-col m-1'>
              <label className='text-sm text-gray-500'>AMOUNT</label>
              <input onChange={this.addAmount} type="text" placeholder='AMOUNT' className='py-2 px-4 rounded border-2 border-gray-300 text-sm' />
            </div>
            <div className='flex flex-col m-1'>
              <label className='text-sm text-gray-500'>TYPE</label>
              <select onChange={this.addType} className='text-gray-500 py-2 px-4 rounded border-2 border-gray-300 text-sm' >
                {transactionTypeOptions.map(eachitem => (
                  <TransactionItem transactionTypeOptions={eachitem} />
                ))}
              </select>
              <button type='submit' className='py-2 w-20 rounded bg-blue-500 hover:bg-blue-600 text-white my-2'>Add</button>
            </div>
          </form>

          <div className='shadow py-3 px-3 rounded card h-80'>
            <h1 className='font-semibold text-gray-700 text-xl mb-2'>History</h1>
            <div className='grid grid-cols-4 gap-1 border p-2'>
              <p className='font-semibold text-semibold text-gray-400 w-16 text-center'>Title</p>
              <p className='font-semibold text-semibold text-gray-400 w-16 text-center'>Amount</p>
              <p className='font-semibold text-semibold text-gray-400 w-16 text-center'>Type</p>
              <p className='font-semibold text-semibold text-gray-400 w-16 text-center'></p>
            </div>
            <div className=''>
              {currentList.map(eachitem => (
                <MoneyDetails deleteTransaction={this.deleteTransaction} currentList={eachitem} key={eachitem.id} />
              ))}
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default MoneyManager