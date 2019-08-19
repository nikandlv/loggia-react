import Wrapper from '../components/Wrapper'
import { Gallery } from '../components/Gallery';
import { BottomBar } from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Fullscreen from "react-full-screen";
import BottomSheet from '../components/BottomSheet';
import Items from '../resources/items.json'
export default class GalleryPage extends React.Component {
	constructor(props) {
		super(props)
		this.updateLanguage(true,this.state.language)
	}
	state = {
		active:0,
		fullscreen:false,
		overview:false,
		language:'en',
	}
	updateLanguage = (nostate, language) => {
		global.clearTimeout(this.timeOut);
		let itemsTemp = [];
		Items.map((value,key) => {
			itemsTemp.push({...value,...value.about[language]})
		})
		if(nostate) {
			this.state.language = language
			this.state.items = itemsTemp
		} else {
			global.clearTimeout(this.timeOut);
			this.setState({
				items:itemsTemp,
				language
			})
			
		}
	}
	timeOut = []
	continueLoop = () => {
		this.timeOut = window.setTimeout(()=> {
            let active = this.state.active
            if(active === (this.state.items.length - 1)) {
                active = 0
            } else {
                active += 1
            }
			this.setItem(active)
			global.clearTimeout(this.timeOut);
		},6000)
	}
	setFullscreen = (fullscreen) => {
		if(fullscreen && this.state.fullscreen) {
			return
		}
		this.setState({fullscreen})
		
	}
	setItem = (active) => {
		this.setState({
			active
		})
		global.clearTimeout(this.timeOut );
	}
	setOverview = (overview) => {
		this.setState({overview})
	}
	render() {
		return (
			<Fullscreen
			enabled={this.state.fullscreen}
			onChange={isFull => this.setFullscreen(isFull)}
		  >
			<Wrapper direction={this.state.language == 'fa' ? 'rtl' : 'ltr'} key={this.state.language}>
				<TopBar
					updateLanguage={this.updateLanguage}
					language={this.state.language}
					fullscreen={this.state.fullscreen}
					setFullscreen={this.setFullscreen}
					items={this.state.items}
					active={this.state.active}
					setItem={this.setItem}
					continueLoop={this.continueLoop}
					/>
				<Gallery
					language={this.state.language}
					fullscreen={this.state.fullscreen}
					items={this.state.items}
					active={this.state.active}
					setItem={this.setItem}
					continueLoop={this.continueLoop}
					/>
				<BottomBar
					setOverview={this.setOverview}
					items={this.state.items}
					active={this.state.active}
					setItem={this.setItem}
					language={this.state.language}
					/>
				<BottomSheet
					setOverview={this.setOverview}
					items={this.state.items}
					active={this.state.active}
					setItem={this.setItem}
					open={this.state.overview}
					language={this.state.language}
					/>
			</Wrapper>
			</Fullscreen>
		)
	}
}