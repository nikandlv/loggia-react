import * as types from './types'
import Store from '../Store'
export const setFullscreen = (fullscreen) => (dispatch) => {
    dispatch({
        type:types.SET_FULLSCREEN,
        payload: fullscreen
    })
}


export const setLanguage = (rtl,language) => (dispatch) => {
    dispatch({
        type:types.SET_LANGUAGE,
        payload: language,
        rtl
    })
}

export const setOverview = (overview) => (dispatch) => {
    dispatch({
        type:types.SET_OVERVIEW,
        payload: overview
    })
}
let lock = +new Date();
export const setCurrent = (current) => (dispatch) => {
    
    dispatch({
        type:types.SET_CURRENT,
        payload: current
    })
}

export const setCurrentForce = (current) => (dispatch) => {
    dispatch({
        type:types.SET_CURRENT_FORCE,
        payload: current
    })
}


export const proceed = () => (dispatch) => {
    console.log(lock - (+new Date()))
    let date = +new Date();
    if(lock === 0) {
        lock = date
    }  else if((date - lock) < 100) {
            lock = date
        return
    }
    lock = date
    let store = Store.getState()
    let current = store.GalleryReducer.current_index
    let total = store.GalleryReducer.photos.length
    dispatch({
        type:types.SET_CURRENT,
        payload: (total === current + 1) ? 0 : current + 1
    })
}