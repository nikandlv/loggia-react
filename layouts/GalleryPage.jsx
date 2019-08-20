import Wrapper from '../components/Wrapper'
import { Gallery } from '../components/Gallery';
import { BottomBar } from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Fullscreen from "react-full-screen";
import BottomSheet from '../components/BottomSheet';
import Store from '../data/Store';
import GalleryReducer from '../data/Reducers/GalleryReducer';
import {connect} from 'react-redux'
Store.injectReducer('GalleryReducer',GalleryReducer)
class GalleryPage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Fullscreen
			enabled={this.props.fullscreen}
			onChange={isFull => this.setFullscreen(isFull)}
		  >
			<Wrapper direction={this.props.rtl ? 'rtl' : 'ltr'} key={this.props.language}>
				<TopBar />
				<Gallery />
				<BottomBar />
				<BottomSheet />
			</Wrapper>
			</Fullscreen>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		...state.GalleryReducer
	}
}
export default connect()(GalleryPage)