import { FETCH_ROBOTS, SEARCH_VALUE, LOADING_ROBOTS } from './types'

export const fetchRobots = () => dispatch => {

    dispatch(setLoadingRobots());
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => 
            dispatch({
                type: FETCH_ROBOTS,
                payload: data
            })
        )
      .catch(err => console.log(err))

}
export const searchValue = (e) => ({ type: SEARCH_VALUE, payload: e.target.value })
export const setLoadingRobots = () => ({ type: LOADING_ROBOTS })