import Thumbnail from "../Gallery/Thumbnail";
import Typist from 'react-typist';
import { withGallery } from "../../data/Reducers/GalleryReducer";

function BottomSheet(props) {
    const {photos, current, current_index, setOverview, setItem, language} = props
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
                        {photos.map((item,key)=> {
                            if(key % 2 === 1) {
                                return
                            }
                            return (
                                <Thumbnail onClick={()=> setItem(key)} photo={item.thumbnail} active={key === current_index} key={key}/>
                            )
                        })}
                    </div>
                    <div className="row">
                        {photos.map((item,key)=> {
                            if(key % 2 === 0) {
                                return
                            }
                            return (
                                <Thumbnail onClick={()=> setItem(key)} photo={item.thumbnail} active={key === current_index} key={key}/>
                            )
                        })}
                    </div>
                </div>
            <div>
            <Typist key={current_index} avgTypingDelay={50} startDelay={20}>
                <h1>{current.title}</h1>
                
            <span>{current.description}</span>
                <Typist.Backspace count={current.trail} />
                <span>{current.description_trail}</span>
            </Typist>
            </div>
            </div>
        </div>
    )
}
export default withGallery(BottomSheet)