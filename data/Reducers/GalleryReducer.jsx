import * as types from '../Actions/types'

const initialState = {
    fullscreen: false,
    language: 'en'
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
        default:
            return state;
    }
}