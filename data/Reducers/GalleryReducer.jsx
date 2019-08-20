import * as types from '../Actions/types'
import Items from '../../resources/items.json'

const initialState = {
    fullscreen: false,
    language: 'en',
    rtl: false,
    current: 0,
    current_id: 0,
    photos: Items,
    overview: false,
}

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
                current_id: action.payload,
                current: state.items[action.payload]
            }
        default:
            return state;
    }
}