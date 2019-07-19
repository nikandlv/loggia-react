import React from 'react'
import Typist from 'react-typist';
export default class PhotoZone extends React.Component {
    constructor(props) {
        super(props)
        this.view = React.createRef();
        this.progress = React.createRef();
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
            this.progress.current.className = this.progress.current.className.replace("loading","loaded")
            this.transition = false
            this.forceUpdate()
            this.props.continueLoop()
        },370)
    }
    shouldComponentUpdate() {
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
        return (
            <div>
                <div className="zone">
                    <img alt="image" src={item.photo} onLoad={this.updateItem} style={{display:'none'}} />
                    <div className={`view active loaded`} ref={this.view} style={{backgroundImage:`url(${item.photo})`}}>
                    </div>
                    <div className="overlay" ref={this.overlay} />
                    <div className="text">
                        <Typist key={active} avgTypingDelay={50} startDelay={20}>
                            <h1>{item.title}</h1>
                            <span>{item.description_1}</span>
                            <Typist.Backspace count={item.backspace} />
                            <span>{item.description_2}</span>
                        </Typist>
                    </div>
                </div>
                <div className="progress loading" ref={this.progress} />
            </div>
        )
    }
}