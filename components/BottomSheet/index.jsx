import Thumbnail from "../Gallery/Thumbnail";

export default function BottomSheet(props) {
    const {items,active,setOverview} = props
    const activeItem = items[active]
    return (
        <div className={`bottom-sheet ${props.open?" open":""}`}>
            <div className="sheet-wrapper">
                <h1>گالری ایران زیبا</h1>
                <div className="thumbnail-wrapper">
                    <div className="row">
                        {items.map((item,key)=> {
                            if(key % 2 === 1) {
                                return
                            }
                            return (
                                <Thumbnail photo={item.thumbnail} active={key === active} key={key}/>
                            )
                        })}
                    </div>
                    <div className="row">
                        {items.map((item,key)=> {
                            if(key % 2 === 0) {
                                return
                            }
                            return (
                                <Thumbnail photo={item.thumbnail} active={key === active} key={key}/>
                            )
                        })}
                    </div>
                </div>
            <div>
            <h1>{activeItem.title}</h1>
            </div>
            </div>
            <div className="expand-icon-wrapper">
                <div>
                    <svg onClick={() => setOverview(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
        </div>
    )
}