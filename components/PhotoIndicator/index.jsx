import React from 'react'
export default class PhotoIndicator extends React.Component {
    state = {
        status: 0,
    }
    render() {
        const {status} = this.state
        return (
            <div className="photo-indicator">
                <span className="number">1</span>
                <span className="title">test</span>
            </div>
        )
    }
} 