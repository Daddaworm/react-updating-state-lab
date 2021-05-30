// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state ={
            timesClicked: 0
        }
    }

    handleCount = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.timesClicked}</h1>
                <button onClick={this.handleCount}>{this.state.timesClicked}</button>
            </div>
        )
    }

}