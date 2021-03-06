import React from 'react'
import Typist from 'react-typist';
import { withGallery } from '../../data/Reducers/GalleryReducer';
let progressTransitionSet = false
let progressCounter = 0
class PhotoZone extends React.Component {
    constructor(props) {
        super(props)
        this.view = React.createRef();
        this.progress = React.createRef();
        this.transition = false
    }
    updateItem = () => {
        window.setTimeout(()=> {
            this.view.current.className = this.view.current.className.replace("loading","loaded")
            this.progress.current.className = this.progress.current.className.replace("loading","loaded")
            this.progress.current.addEventListener('transitionend', () => {
                if(!this.transition) {
                    if(!this.props.force) {
                        this.props.proceed()
                    }
                }
            });
            this.transition = false
            this.forceUpdate()
        },370)
    }
    
    shouldComponentUpdate(props) {
        this.progress.current.addEventListener('transitionend', () => {
            if(!this.transition) {
                if(!this.props.force) {
                    this.props.proceed()
                } else if(this.props.force === true && this.props.force === props.force){
                    this.props.proceed()
                }
            }
        });

        if(this.props.fullscreen !== props.fullscreen) {
            return false
        }
        if(this.props.overview !== props.overview) {
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
        const {current, current_index, language} = this.props;
        return (
            <div key={current_index}>
                <div className="zone">
                    <img alt="image" src={current.photo} onLoad={this.updateItem} style={{display:'none'}} />
                    <div className={`view active loaded`} ref={this.view} style={{backgroundImage:`url(${current.photo})`}}>
                    </div>
                    <div className="overlay" ref={this.overlay} />
                    <div className={`text ${current.zone_light?"light":""}`}>
                        <Typist key={current_index} avgTypingDelay={50} startDelay={20}>
                            <h1>{current.about[language].title}</h1>
                            <span>{current.about[language].description}</span>
                            <Typist.Backspace count={current.about[language].trail} />
                            <span>{current.about[language].description_trail}</span>
                        </Typist>
                    </div>
                </div>
                <div className={`progress loading ${current.bottombar_light?"light":""}`} ref={this.progress} />
            </div>
        )
    }
}

export default  withGallery(PhotoZone)