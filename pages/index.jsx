import Wrapper from '../components/Wrapper'
import { Gallery } from '../components/Gallery';
import { BottomBar } from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Fullscreen from "react-full-screen";
import BottomSheet from '../components/BottomSheet';

export default class index extends React.Component {
	state = {
		active:0,
		fullscreen:false,
		overview:false,
		language:'fa'
	}
	timeOut = []
	continueLoop = () => {
		this.timeOut = window.setTimeout(()=> {
            let active = this.state.active
            if(active === (this.items.length - 1)) {
                active = 0
            } else {
                active += 1
            }
			this.setItem(active)
		
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
		clearTimeout(this.timeOut );
	}
	setOverview = (overview) => {
		this.setState({overview})
	}
	items = [
		{
			title:"عکس شماره ۱",
			description:"این متن درباره عکسی که در صفحه می بینید میباسد!",
			description_trail:"می باشد!",
			trail:7,
			photo:"/static/img/shot-1.jpg",
			thumbnail:"/static/img/thumbnail-shot-1.jpg",
			bottombar_light:true,
			zone_light:true,
			topbar_light:true 
		},
	]
	render() {
		return (
			<Fullscreen
			enabled={this.state.fullscreen}
			onChange={isFull => this.setFullscreen(isFull)}
		  >
			<Wrapper>
				<TopBar fullscreen={this.state.fullscreen} setFullscreen={this.setFullscreen} items={this.items} active={this.state.active} setItem={this.setItem} continueLoop={this.continueLoop}/>
				<Gallery fullscreen={this.state.fullscreen} items={this.items} active={this.state.active} setItem={this.setItem} continueLoop={this.continueLoop} />
				<BottomBar setOverview={this.setOverview} items={this.items} active={this.state.active} setItem={this.setItem} />
				<BottomSheet setOverview={this.setOverview} items={this.items} active={this.state.active} setItem={this.setItem} open={this.state.overview}/>
			</Wrapper>
			</Fullscreen>
		)
	}
}