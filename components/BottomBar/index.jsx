import React from 'react'
import PhotoIndicator from '../PhotoIndicator';
export class BottomBar extends React.Component {
    render() {
        return (
            <section className="bottom-bar">
                {this.props.items.map((item,key) => {
                    return (
                        <PhotoIndicator number={key+1} key={key} title={item.title} active={key === this.props.active} />
                    )
                })}
                <div className="expand-icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </section>
        )
    }
}