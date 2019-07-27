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
        let newActive = props.active
        let oldActive = this.props.active
        let newLanguage = props.language
        let oldLanguage = this.props.language
        if(oldActive === newActive && oldLanguage === newLanguage) {
            return false
        }
        return true
    }
}