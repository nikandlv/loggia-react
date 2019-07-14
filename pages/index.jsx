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
			image:"/static/img/shot-1.jpg"
		},
		{
			title:"عکس شماره ۲",
			image:"/static/img/shot-2.jpg"
		},
		{
			title:"عکس شماره ۳",
			image:"/static/img/shot-3.jpg"
		},
		{
			title:"عکس شماره ۴",
			image:"/static/img/shot-4.jpg"
		},
		{
			title:"عکس شماره ۵",
			image:"/static/img/shot-5.jpg"
		},
		{
			title:"عکس شماره ۶",
			image:"/static/img/shot-6.jpg"
		},
		{
			title:"عکس شماره ۷",
			image:"/static/img/shot-7.jpg"
		},
		{
			title:"عکس شماره ۸",
			image:"/static/img/shot-8.jpg"
		},
		{
			title:"عکس شماره ۹",
			image:"/static/img/shot-9.jpg"
		},
		{
			title:"عکس شماره ۱۰",
			image:"/static/img/shot-10.jpg"
		}
	]
	componentDidMount() {
        this.itemLoop()
    }
    itemLoop = () => {
        window.setTimeout(()=> {
            let active = this.state.active
            if(active === 10) {
                active = 0
            } else {
                active += 1
            }
            this.setState({
                active:active
            })
            this.itemLoop()
        },3000)
    }
	render() {
		return (
			<Wrapper>
				<Gallery items={this.items} active={this.state.active} />
				<BottomBar items={this.items} active={this.state.active} />
			</Wrapper>
		)
	}
}