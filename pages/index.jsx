import Wrapper from '../components/Wrapper'
import { Gallery } from '../components/Gallery';
import { BottomBar } from '../components/BottomBar';
export default class index extends React.Component {
	state = {
		active:0
	}
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
				<Gallery active={this.state.active} />
				<BottomBar active={this.state.active} />
			</Wrapper>
		)
	}
}