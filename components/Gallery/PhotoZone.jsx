import React from 'react'

export default class PhotoZone extends React.Component {
    render() {
        return (
            <div className="zone">
                <div className="view-1 active" ref={this.view1} style={{backgroundImage:"url(/static/img/shot-1.jpg)"}}>
                    a
                </div>
                <div className="view-2" ref={this.view2}>
b
                </div>
                <div className="overlay" ref={this.overlay} />
            </div>
        )
    }
}