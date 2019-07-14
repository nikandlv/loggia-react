import React from 'react'

export default class PhotoZone extends React.Component {
    render() {
        const {items,active} = this.props
        return (
            <div className="zone">
                <div className="view-1 active" ref={this.view1} style={{backgroundImage:`url(${items[active].photo})`}}>
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