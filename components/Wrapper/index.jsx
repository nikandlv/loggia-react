import 'normalize-stylus/normalize.styl'
import '../../resources/App.styl'
import { withGallery } from '../../data/Reducers/GalleryReducer';
class Wrapper extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <div className={`wrapper ${this.props.direction}`}>
                {this.props.children}
            </div>
        )
    }
}

export default withGallery(Wrapper)