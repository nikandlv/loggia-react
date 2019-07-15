import React from 'react'

export default class PhotoZone extends React.Component {
    constructor(props) {
        super(props)
        this.view = React.createRef();
    }
    state = {
        loading:true,
    }
    updateItem = () => {
        this.view.current.className = this.view.current.className.replace("loading","loaded")
    }
    componentDidUpdate(props,state) {
        if(this.props.active !== this.state.active) {
            this.view.current.className = this.view.current.className.replace("loaded","loading")
        }
    }
    render() {
        const {items,active} = this.props;
        const item = items[active];
        return (
            <div className="zone">
                <img alt="image" src={item.photo} onLoad={this.updateItem} style={{display:'none'}} />
                <div className={`view-1 active loading`} ref={this.view} style={{backgroundImage:`url(${item.photo})`}}>
                </div>
                <div className="overlay" ref={this.overlay} />
            </div>
        )
    }
}