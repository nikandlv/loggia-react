import * as types from './types'

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