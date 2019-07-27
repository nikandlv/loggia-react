import React from 'react'
import { toPersian } from '../../utility/PersianDigits';
export default function PhotoIndicator(props) {
    function switchTo() {
        props.setItem(props.number-1);
    }
    return (
        <div className={`photo-indicator ${(props.light?'light ':'')} ${(props.active?"active":"")}`} onClick={switchTo}>
            <span className="number">{props.language === 'fa' ? toPersian(props.number) : props.number}</span>
            <span className="title">{props.title}</span>
        </div>
    )
}