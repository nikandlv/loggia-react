import React from 'react'
import PhotoIndicator from '../PhotoIndicator';

export class BottomBar extends React.Component {
    state = {
        active:1,
    }
    items = [
        "تهران",
        "برج میلاد",
        "بازار تهران",
        "مسجد",
    ]
    render() {
        return (
            <section className="bottom-bar">
                {this.items.map((item,key) => {
                    return (
                        <PhotoIndicator number={key} key={key} title={item} active={key === this.state.active} />
                    )
                })}
            </section>
        )
    }
}