import 'normalize-stylus/normalize.styl'
import '../../resources/App.styl'
export default class Wrapper extends React.Component {
    render() {
        return (
            <div className={`wrapper ${this.props.direction}`}>
                {this.props.children}
            </div>
        )
    }
}
