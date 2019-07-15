import Wrapper from '../components/Wrapper'
import { Gallery } from '../components/Gallery';
import { BottomBar } from '../components/BottomBar';
export default class index extends React.Component {
	state = {
		active:0,
	}
	items = [
		{
			title:"عکس شماره ۱",
			photo:"/static/img/shot-1.jpg",
			light:true
		},
		{
			title:"عکس شماره ۲",
			photo:"/static/img/shot-2.jpg",
			light:false
		},
		{
			title:"عکس شماره ۳",
			photo:"/static/img/shot-3.jpg",
			light:true
		},
		{
			title:"عکس شماره ۴",
			photo:"/static/img/shot-4.jpg",
			light:true
		},
		{
			title:"عکس شماره ۵",
			photo:"/static/img/shot-5.jpg",
			light:false
		},
		{
			title:"عکس شماره ۶",
			photo:"/static/img/shot-6.jpg",
			light:false
		},
		{
			title:"عکس شماره ۷",
			photo:"/static/img/shot-7.jpg",
			light:false
		},
		{
			title:"عکس شماره ۸",
			photo:"/static/img/shot-8.jpg",
			light:false
		},
		{
			title:"عکس شماره ۹",
			photo:"/static/img/shot-9.jpg",
			light:false
		},
		{
			title:"عکس شماره ۱۰",
			photo:"/static/img/shot-10.jpg",
			light:false
		}
	]
    setItem = (active) => {
		this.setState({
			active
		})
    }
	render() {
		return (
			<Wrapper>
				<Gallery items={this.items} active={this.state.active} setItem={this.setItem} />
				<BottomBar items={this.items} active={this.state.active} setItem={this.setItem} />
			</Wrapper>
		)
	}
}