import { FETCH_ROBOTS, SEARCH_VALUE, LOADING_ROBOTS } from '../actions/types'

const initialState = {
    robots: [],
    search: '',
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ROBOTS:
            return {
                ...state,
                robots: action.payload,
                loading: false
            }
        case SEARCH_VALUE:
            return {
                ...state,
                search: action.payload
            }
        case LOADING_ROBOTS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}