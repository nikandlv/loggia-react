import React from 'react'
export default class PhotoZone extends React.Component {
    constructor(props) {
        super(props)
        this.view = React.createRef();
        this.transition = false
    }
    state = {
        current:{title:"",photo:""},
        progress:0
    }
    componentDidMount() {
        this.updateItem()
    }
    progressTimeout = {};
    loopProgress = () => {
        this.progressTimeout = window.setTimeout(()=> {
            if(this.state.progress === 100) {
                return
            }
            this.isProgress = true
            this.setState({
                progress:this.state.progress+1
            })
            this.loopProgress()
        },(3000/100))
    }
    isProgress = false
    updateItem = () => {
        window.setTimeout(()=> {
            this.view.current.className = this.view.current.className.replace("loading","loaded")
            this.transition = false
            this.forceUpdate()
            this.props.continueLoop()
            this.isProgress = true
            this.setState({
                progress:0
            })
            clearTimeout(this.progressTimeout);
            this.loopProgress()
        },370)
    }
    shouldComponentUpdate() {
        if(this.isProgress) {
            this.isProgress = false
            return true
        }
        if(this.transition === true) {
            this.transition = false
            return true    
        }
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
            <div>
                <div className="zone">
                    <img alt="image" src={item.photo} onLoad={this.updateItem} style={{display:'none'}} />
                    <div className={`view active loaded`} ref={this.view} style={{backgroundImage:`url(${item.photo})`}}>
                    </div>
                    <div className="overlay" ref={this.overlay} />
                </div>
                <div className="progress" style={{width:this.state.progress+"%"}}/>
            </div>
        )
    }
}