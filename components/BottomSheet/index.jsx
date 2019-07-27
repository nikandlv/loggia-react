import Thumbnail from "../Gallery/Thumbnail";
import Typist from 'react-typist';

export default function BottomSheet(props) {
    const {items, active, setOverview, setItem, language} = props
    const activeItem = items[active]
    return (
        <div className={`bottom-sheet ${props.open?" open":""}`}>
            <div className="expand-icon-wrapper">
                <div className="push"/>
                <div>
                    <svg onClick={() => setOverview(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
            <div className="sheet-wrapper">
                <h1>{language === 'fa' ? 'گالری باحال من' : 'My Awesome Gallery'}</h1>
                <div className="thumbnail-wrapper">
                    <div className="row">
                        {items.map((item,key)=> {
                            if(key % 2 === 1) {
                                return
                            }
                            return (
                                <Thumbnail onClick={()=> setItem(key)} photo={item.thumbnail} active={key === active} key={key}/>
                            )
                        })}
                    </div>
                    <div className="row">
                        {items.map((item,key)=> {
                            if(key % 2 === 0) {
                                return
                            }
                            return (
                                <Thumbnail onClick={()=> setItem(key)} photo={item.thumbnail} active={key === active} key={key}/>
                            )
                        })}
                    </div>
                </div>
            <div>
            <Typist key={active} avgTypingDelay={50} startDelay={20}>
                <h1>{activeItem.title}</h1>
                
            <span>{activeItem.description}</span>
                <Typist.Backspace count={activeItem.trail} />
                <span>{activeItem.description_trail}</span>
            </Typist>
            </div>
            </div>
        </div>
    )
}