// Code YouTubeDebugger Component Here
import React, { Component } from 'react'


export default class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })  
    }


    render() {
        return(
            <div>
                <h1>{this.state.settings.bitrate}</h1>
                <button onClick={this.handleBitrate} className={'bitrate'}>Bitrate {this.state.settings.bitrate}</button>
                <h1>{this.state.settings.video.resolution}</h1>
                <button onClick={this.handleResolution} className={'resolution'}>Video Resolution {this.state.settings.video.resolution}</button>
            </div>
        )
    }

}