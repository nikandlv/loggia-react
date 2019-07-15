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
        
    }
    componentDidUpdate(props,state) {
        if(this.props.active !== this.state.active) {
            console.log("update",this.view.current)
        }
    }
    render() {
        const {items,active} = this.props;
        const item = items[active];
        const {loading} = this.state;
        const status = loading? "loading":"loaded";
        return (
            <div className="zone">
                <img alt="image" src={item.photo} onLoad={this.updateItem} style={{display:'none'}} />
                <div className={`view-1 active ${status}`} ref={this.view} style={{backgroundImage:`url(${item.photo})`}}>
                </div>
                <div className="overlay" ref={this.overlay} />
            </div>
        )
    }
}