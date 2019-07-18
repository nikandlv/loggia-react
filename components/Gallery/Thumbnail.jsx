export default function Thumbnail(props) {
    const {photo,active} = props
    return (
        <div className={`thumbnail ${active?"active":""}`} style={{backgroundImage:`url(${photo})`}} />
    )
}