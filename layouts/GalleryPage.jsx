import Wrapper from '../components/Wrapper'
import { Gallery } from '../components/Gallery';
import { BottomBar } from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Fullscreen from "react-full-screen";
import BottomSheet from '../components/BottomSheet';
import Store from '../data/Store';
import GalleryReducer from '../data/Reducers/GalleryReducer';
Store.injectReducer('GalleryReducer',GalleryReducer)
export default class GalleryPage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Fullscreen
			enabled={this.state.fullscreen}
			onChange={isFull => this.setFullscreen(isFull)}
		  >
			<Wrapper direction={this.state.language == 'fa' ? 'rtl' : 'ltr'} key={this.state.language}>
				<TopBar />
				<Gallery />
				<BottomBar />
				<BottomSheet />
			</Wrapper>
			</Fullscreen>
		)
	}
}