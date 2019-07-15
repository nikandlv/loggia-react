import React from 'react'

export default class PhotoZone extends React.Component {
    constructor(props) {
        super(props)
        this.view = React.createRef();
        this.transition = false
    }
    state = {
        current:{title:"",photo:""},
    }
    componentDidMount() {
        this.updateItem()
    }
    updateItem = () => {
        window.setTimeout(()=> {
            this.view.current.className = this.view.current.className.replace("loading","loaded")
            this.transition = false
            this.forceUpdate()
            
        },370)
    }
    shouldComponentUpdate() {
        console.log(this.transition)
        if(this.transition === true) {
            this.transition = false
            return true    
        }
        console.log("loading")
        this.view.current.className = this.view.current.className.replace("loaded","loading")
        window.setTimeout(()=> {
            this.transition = true
            this.forceUpdate()
        },370)
        return false
    }
    render() {
        const {items,active} = this.props;
        const item = items[active];
        return (
            <div className="zone">
                <img alt="image" src={item.photo} onLoad={this.updateItem} style={{display:'none'}} />
                <div className={`view active loaded`} ref={this.view} style={{backgroundImage:`url(${item.photo})`}}>
                </div>
                <div className="overlay" ref={this.overlay} />
            </div>
        )
    }
}