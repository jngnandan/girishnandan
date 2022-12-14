
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PasswordItem from '../PasswordItem';


const passwordList = [
]

export class PasswordManager extends Component {
    state = {
        tempList: passwordList,
        website: "",
        username: "",
        password: "",
        searchInput: ""
    }
    updateWebsite = (event) => {
        this.setState({ website: event.target.value })
    }
    updateUsername = (event) => {
        this.setState({ username: event.target.value })
    }
    updatePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { website, username, password, tempList } = this.state



        const newPassword = {
            id: uuidv4(),
            website,
            username,
            password,
        }

        {
            !password || isNaN(username) &&

                this.setState({
                    tempList: [...tempList, newPassword],
                    website: "",
                    username: "",
                    password: "",
                    searchInput: "",
                    viewPassword: false,
                })
        }
    }


    deltePassword = (id) => {
        const { tempList } = this.state

        console.log(id)
        this.setState({
            tempList: tempList.filter(eachitem => (
                eachitem.id !== id
            ))
        })
    }

    searchPassword = (event) => {
        const { tempList, searchInput } = this.state
        this.setState({ searchInput: event.target.value })
    }

    showPasswords = (event) => {
        const { viewPassword } = this.state

        if (event.target.checked) {
            this.setState({ viewPassword: true })
        } else {
            this.setState({ viewPassword: false })

        }
    }


    render() {
        const { tempList, searchInput, viewPassword } = this.state

        const searchResults = tempList.filter(eachitem => eachitem.website.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))

        return (
            <div className='px-6 bg-gradient-to-t from-sky-300 to-sky-500  h-screen bg-cover overflow-auto p-20 px-6 md:px-16 lg:px-44 xl:px-60 py-10'>
                <img alt='app logo' className='w-28 pl-6 pt-6' src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" />


                <div className='card rounded shadow py-6 my-6  bg-sky-700 w-full grid md:grid-cols-2 px-8 items-center'>
                    <form onSubmit={this.onSubmit} className='flex flex-col justify-start items-start bg-sky-800 py-6 px-2 rounded'>
                        <h1 className='ml-2 font-bold text-white pr-24'>Add New Password</h1>

                        <div className='m-2 rounded border grid grid-cols-8 bg-white'>
                            <div className='bg-sky-200 flex flex-col justify-center items-center grid-span-1'>
                                <img alt='website' className='w-6 h-6 m-2' src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" />
                            </div>
                            <input onChange={this.updateWebsite} type="text" placeholder='Enter Website' className='placeholder:text-sm font-medium w-max pl-3' />
                        </div>

                        <div className='m-2 rounded border grid grid-cols-8 bg-white'>
                            <div className='bg-sky-200 flex flex-col justify-center items-center grid-span-1'>
                                <img alt='username' className='w-6 h-6 m-2' src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" />
                            </div>
                            <input onChange={this.updateUsername} type="text" placeholder='Enter Username' className='placeholder:text-sm font-medium focus:bg-white w-max pl-3' />
                        </div>

                        <div className='m-2 rounded border flex grid grid-cols-8 bg-white'>
                            <div className='bg-sky-200 flex flex-col justify-center items-center grid-span-1'>
                                <img alt='password' className='w-6 h-6 m-2' src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png" />
                            </div>
                            <input onChange={this.updatePassword} type="password" placeholder='Enter Password' className='placeholder:text-sm font-medium p-2 focus:bg-white w-max pl-3' />
                        </div>

                        <button type="submit" className='ml-2 bg-blue-500 hover:bg-blue-700 py-1.5 my-1 w-20 text-white font-medium rounded'>Add</button>
                    </form>
                    <img alt='password manager' className='' src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" />
                </div>

                {/* // 2nd card */}
                <div className='card rounded shadow py-4 my-8 bg-sky-700 w-full flex flex-col justify-start pl-6 overflow-auto px-4'>
                    {/* search */}
                    <div className='flex flex-row justify-between	items-center'>
                        <div className='flex flex-row justify-start items-start mb-3'>
                            <h1 className="font-bold text-white">Your Passwords</h1>
                            <button className='border rounded-full  ml-2 w-8 text-sm text-white'>{searchResults.length}</button>
                        </div>

                        <div className='my-2 rounded border flex flex-row justify-start bg-white'>
                            <div className='bg-sky-200'>
                                <img alt='search' className='w-6 h-6 my-2 mx-2' src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" />
                            </div>
                            <input onChange={this.searchPassword} type="search" placeholder='Search' className='placeholder:text-sm font-medium p-2 focus:bg-white' />
                        </div>
                    </div>

                    <hr />
                    {/* password list */}
                    <div className='flex flex-row justify-end items-center'>
                        <input className='w-4 h-4 m-1' onClick={this.showPasswords} value="checkbox" type="checkbox" />
                        <label>
                            <p className='text-white text-sm font-bold'>Show Password</p>

                        </label>
                    </div>

                    {searchResults.length === 0 ?
                        <div className='p-6 text-center flex flex-col justify-center items-center'>
                            <img value="no passwords" className='w-80' src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" />
                            <label className='text-white text-sm font-bold' for="">
                                No Password

                            </label>                        </div>
                        :
                        <ul className='flex flex-wrap justify-start items-start'>
                            {searchResults.map(eachitem => (
                                <PasswordItem viewPassword={viewPassword} deltePassword={this.deltePassword} tempList={eachitem} key={eachitem.id} />
                            ))}
                        </ul>
                    }

                </div>


            </div>
        )
    }
}

export default PasswordManager