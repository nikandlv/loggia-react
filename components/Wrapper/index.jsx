import 'normalize-stylus/normalize.styl'
import '../../resources/App.styl'
export default function Wrapper(props) {
    return (
        <div className={`wrapper ${props.direction}`}>
            {props.children}
        </div>
    )
}