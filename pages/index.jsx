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
		overview:false
	}
	timeOut = []
	continueLoop = () => {
		this.timeOut = window.setTimeout(()=> {
            let active = this.state.active
            if(active === 9) {
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
		{ title:"عکس شماره ۱",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-1.jpg", thumbnail:"/static/img/thumbnail-shot-1.jpg", bottom_light:true, main_light:true, top_light:true },
		{ title:"عکس شماره ۲",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-2.jpg", thumbnail:"/static/img/thumbnail-shot-2.jpg", bottom_light:false, main_light:true, top_light:true },
		{ title:"عکس شماره ۳",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-3.jpg", thumbnail:"/static/img/thumbnail-shot-3.jpg", bottom_light:true, main_light:true, top_light:true },
		{ title:"عکس شماره ۴",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-4.jpg", thumbnail:"/static/img/thumbnail-shot-4.jpg", bottom_light:true, main_light:true, top_light:true },
		{ title:"عکس شماره ۵",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-5.jpg", thumbnail:"/static/img/thumbnail-shot-5.jpg", bottom_light:false, main_light:false, top_light:false },
		{ title:"عکس شماره ۶",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-6.jpg", thumbnail:"/static/img/thumbnail-shot-6.jpg", bottom_light:false, main_light:false, top_light:false },
		{ title:"عکس شماره ۷",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-7.jpg", thumbnail:"/static/img/thumbnail-shot-7.jpg", bottom_light:false, main_light:false, top_light:false },
		{ title:"عکس شماره ۸",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-8.jpg", thumbnail:"/static/img/thumbnail-shot-8.jpg", bottom_light:false, main_light:false, top_light:false },
		{ title:"عکس شماره ۹",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-9.jpg", thumbnail:"/static/img/thumbnail-shot-9.jpg", bottom_light:false, main_light:false, top_light:false },
		{ title:"عکس شماره ۱۰",description_1:"این متن درباره عکسی که در صفحه می بینید میباسد! ", description_2:"می باشد!", backspace:8, photo:"/static/img/shot-10.jpg", thumbnail:"/static/img/thumbnail-shot-10.jpg",  bottom_light:false, main_light:false, top_light:false }
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