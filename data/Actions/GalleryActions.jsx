import * as types from './types'
import Store from '../Store'
export const setFullscreen = (fullscreen) => (dispatch) => {
    dispatch({
        type:types.SET_FULLSCREEN,
        payload: fullscreen
    })
}


export const setLanguage = (language) => (dispatch) => {
    dispatch({
        type:types.SET_LANGUAGE,
        payload: language
    })
}

export const setOverview = (overview) => (dispatch) => {
    dispatch({
        type:types.SET_OVERVIEW,
        payload: overview
    })
}

export const setCurrent = (current) => (dispatch) => {
    dispatch({
        type:types.SET_CURRENT,
        payload: current
    })
}

let timeOutState = 0
let mainLoop = (dispatch) => {
    let current = Store.GalleryReducer.current_index
    let total = Store.GalleryReducer.items.length
    if(timeOutState === 0) {
        timeOutState = 1
        window.setTimeout(() => {
            timeOutState = 0
            dispatch({
                type:types.SET_CURRENT,
                payload: (total === current + 1) ? 0 : current + 1
            })
        },6000)
    }
}

export const proceed = () => (dispatch) => {
    mainLoop(dispatch)
}