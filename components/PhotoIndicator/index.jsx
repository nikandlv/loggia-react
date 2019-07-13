import React from 'react'
import { toPersian } from '../../utility/PersianDigits';
export default function PhotoIndicator(props) {
    return (
        <div className={`photo-indicator ${(props.active?"active":"")}`}>
            <span className="number">{toPersian(props.number)}</span>
            <span className="title">{props.title}</span>
        </div>
    )
}