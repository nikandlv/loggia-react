import React from 'react'
import PhotoZone from './PhotoZone';
export class Gallery extends React.Component {
    render() {
        return (
            <section className="gallery">
                <PhotoZone items={this.props.items} active={this.props.active} setItem={this.props.setItem} continueLoop={this.props.continueLoop} />
            </section>
        )
    }
}