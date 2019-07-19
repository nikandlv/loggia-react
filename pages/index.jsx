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
		{ title:"عکس شماره ۱",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-1.jpg", thumbnail:"/static/img/thumbnail-shot-1.jpg", light:true },
		{ title:"عکس شماره ۲",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-2.jpg", thumbnail:"/static/img/thumbnail-shot-2.jpg", light:false },
		{ title:"عکس شماره ۳",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-3.jpg", thumbnail:"/static/img/thumbnail-shot-3.jpg", light:true },
		{ title:"عکس شماره ۴",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-4.jpg", thumbnail:"/static/img/thumbnail-shot-4.jpg", light:true },
		{ title:"عکس شماره ۵",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-5.jpg", thumbnail:"/static/img/thumbnail-shot-5.jpg", light:false },
		{ title:"عکس شماره ۶",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-6.jpg", thumbnail:"/static/img/thumbnail-shot-6.jpg", light:false },
		{ title:"عکس شماره ۷",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-7.jpg", thumbnail:"/static/img/thumbnail-shot-7.jpg", light:false },
		{ title:"عکس شماره ۸",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-8.jpg", thumbnail:"/static/img/thumbnail-shot-8.jpg", light:false },
		{ title:"عکس شماره ۹",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-9.jpg", thumbnail:"/static/img/thumbnail-shot-9.jpg", light:false },
		{ title:"عکس شماره ۱۰",description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته", photo:"/static/img/shot-10.jpg", thumbnail:"/static/img/thumbnail-shot-10.jpg",  light:false }
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