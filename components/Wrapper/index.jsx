import 'normalize-stylus/normalize.styl'
import '../../resources/App.styl'
export default function Wrapper(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}