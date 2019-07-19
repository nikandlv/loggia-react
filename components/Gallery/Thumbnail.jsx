export default function Thumbnail(props) {
    const {photo,active,onClick} = props
    return (
        <div onClick={onClick} className={`thumbnail ${active?"active":""}`} style={{backgroundImage:`url(${photo})`}} />
    )
}