import React from 'react'
import PhotoZone from './PhotoZone';
export class Gallery extends React.Component {
    render() {
        return (
            <section className="gallery">
                <PhotoZone fullscreen={this.props.fullscreen} items={this.props.items} active={this.props.active} setItem={this.props.setItem} continueLoop={this.props.continueLoop} />
            </section>
        )
    }
    shouldComponentUpdate(props) {
        let newProps = [props.active,props.fullscreen]
        let oldProps = [this.props.active,this.props.fullscreen]
        if(newProps.active === oldProps.active && newProps.fullscreen === oldProps.fullscreen) {
            return false
        }
        return true;
    }
}