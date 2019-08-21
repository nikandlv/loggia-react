import React from 'react'
import PhotoIndicator from '../PhotoIndicator';
import { withGallery } from '../../data/Reducers/GalleryReducer';
class BottomBar extends React.Component {
    render() {
        const {current, current_index, photos} = this.props
        return (
            <section className="bottom-bar">
                {photos.map((item,key) => {
                    return (
                        <PhotoIndicator language={this.props.language} setItem={this.props.setItem} number={key+1} key={key} light={current.bottombar_light} title={item.title} active={key === current_index} />
                    )
                })}
                <div className={`expand-icon-wrapper ${current.bottombar_light?'light':''}`}>
                    <div>
                        <svg onClick={() => this.props.setOverview(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </div>
                </div>
            </section>
        )
    }
}

export default withGallery(BottomBar)