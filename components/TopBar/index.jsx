import { withGallery } from "../../data/Reducers/GalleryReducer";

function TopBar(props) {
    const {fullscreen, setFullscreen, current, setLanguage, language} = props
    return (
        <div className={`top-bar ${(current.topbar_light?' light':'')}`}>
            <div>
                <div className="language-icon" onClick={() => {
                    setLanguage(language == 'en',( language == 'fa' ? 'en' : 'fa' ))
                }}>
                    <span>{language == 'fa' ? 'en' : 'fa'}</span>
                </div>
            </div>
            <div className="push">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="icon" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
            </div>
            <div>
                <div  onClick={event => setFullscreen(!fullscreen)}>
                    {fullscreen
                    ?(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path className="icon" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>)
                    :(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path className="icon" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>)}
                </div>
            </div>
        </div>
    )
}
export default withGallery(TopBar)