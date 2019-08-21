import {connect} from 'react-redux'
import * as types from '../Actions/types'
import Items from '../../resources/items.json'
import {setFullscreen, setLanguage, proceed, setCurrent, setCurrentForce} from '../Actions/GalleryActions'
const initialState = {
    fullscreen: false,
    language: 'en',
    rtl: false,
    current_index: 0,
    photos: Items,
    current: {},
    overview: false,
    force: false
}
initialState.current = initialState.photos[0];
export default function GalleryReducer(state = initialState,action) {
    switch(action.type) {
        case types.SET_FULLSCREEN:
            return {
                ...state,
                fullscreen: action.payload
            }
        case types.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
                rtl: action.rtl
            }
        case types.SET_OVERVIEW:
            return {
                ...state,
                overview: action.payload
            }
        case types.SET_CURRENT:
            if(state.force) {
                return {
                    ...state,
                    force: false
                }
            }
            return {
                ...state,
                current_index: action.payload,
                current: state.photos[action.payload],
                force: false
            }
        case types.SET_CURRENT_FORCE:
            return {
                ...state,
                current_index: action.payload,
                current: state.photos[action.payload],
                force: true
            }
        default:
            return state;
    }
}

export const withGallery = (component) => {
    const mapStateToProps = (state) => {
        return {
            ...state.GalleryReducer
        }
    }
    const mapActionsToProps = {
        setFullscreen, setLanguage, proceed, setCurrent, setCurrentForce
    }
    return connect(mapStateToProps,mapActionsToProps)(component)
}