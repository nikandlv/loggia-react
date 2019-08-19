import dynamic from 'next/dynamic'
const Gallery = dynamic(import ('../layouts/GalleryPage'),{ssr:false});
export default class index extends React.Component {

	render() {
		return (
			<Gallery />
		)
	}
}