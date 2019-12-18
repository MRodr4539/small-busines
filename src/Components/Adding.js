import React, { Component, Fragment } from 'react'
import { Button, TextField } from '@material-ui/core'

class Adding extends Component {
    state = {
        name: '',
        address: '',
        hours: '',
        description: '',
    }

    handleTextChange = (e) => {
        e.preventDefault()
        const newState = {...this.state}
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const listing = {...this.state}
        listing.id = this.props.listingTotal + 1
        this.props.addListing(listing)
        this.props.history.push('/')
    }


    render(){
        return(
            <div className = "whole-page">
                <form 
                    onSubmit = {this.handleSubmit}
                    style = {{display: 'flex', flexDirection: 'column', width: '400px'}}>
                <TextField
                    id = 'name'
                    placeholder = 'Name'
                    value = {this.state.name}
                    onChange = {this.handleTextChange}
                    required />
                <TextField
                    id = 'address'
                    placeholder = 'Address'
                    value = {this.state.address}
                    onChange = {this.handleTextChange}
                    required />
                <TextField
                    id = 'hours'
                    placeholder = 'Hours (ex. 8AM - 9PM'
                    value = {this.state.hours}
                    onChange = {this.handleTextChange}
                    required />
                <TextField
                    id = 'description'
                    placeholder = 'Description'
                    value = {this.state.description}
                    onChange = {this.handleTextChange}
                    required />
                <br></br>
                <Button variant = 'contained' color = 'primary' type = 'submit'>Add Listing</Button>
                </form>
            </div>
        )
    }
}

export default Adding