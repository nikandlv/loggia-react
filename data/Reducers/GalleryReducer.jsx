import {connect} from 'react-redux'
import * as types from '../Actions/types'
import Items from '../../resources/items.json'

const initialState = {
    fullscreen: false,
    language: 'en',
    rtl: false,
    current_index: 0,
    photos: Items,
    current: {},
    overview: false,
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
                language: action.payload
            }
        case types.SET_OVERVIEW:
            return {
                ...state,
                overview: action.payload
            }
        case types.SET_CURRENT:
            return {
                ...state,
                current_index: action.payload,
                current: state.items[action.payload]
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
    return connect(mapStateToProps)(component)
}