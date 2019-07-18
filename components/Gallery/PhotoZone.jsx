import React from 'react'
export default class PhotoZone extends React.Component {
    constructor(props) {
        super(props)
        this.view = React.createRef();
        this.progress = React.createRef();
        this.transition = false
        this.fullscreen = false
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
            this.progress.current.className = this.progress.current.className.replace("loading","loaded")
            this.transition = false
            this.forceUpdate()
            this.props.continueLoop()
        },370)
    }
    shouldComponentUpdate(props) {
        if(props.fullscreen !== this.props.fullscreen && this.transition === false 
            && !(props.fullscreen === true && this.props.fullscreen === true && this.fullscreen === false)) {
            this.fullscreen = this.props.fullscreen
            return false
        }
        if(this.fullscreen !== props.fullscreen && this.transition === false 
            && !(props.fullscreen === true && this.props.fullscreen === true && this.fullscreen === false)) {
            this.fullscreen = props.fullscreen
            return false
        }
        if(this.transition === true) {
            this.transition = false
            return true    
        }
        this.view.current.className = this.view.current.className.replace("loaded","loading")
        this.progress.current.className = this.progress.current.className.replace("loaded","loading")
        window.setTimeout(()=> {
            this.transition = true
            this.forceUpdate()
        },370)
        return false
    }
    render() {
        const {items,active} = this.props;
        const item = items[active];
        this.fullscreen = this.props.fullscreen
        return (
            <div>
                <div className="zone">
                    <img alt="image" src={item.photo} onLoad={this.updateItem} style={{display:'none'}} />
                    <div className={`view active loaded`} ref={this.view} style={{backgroundImage:`url(${item.photo})`}}>
                    </div>
                    <div className="overlay" ref={this.overlay} />
                </div>
                <div className="progress loading" ref={this.progress} />
            </div>
        )
    }
}