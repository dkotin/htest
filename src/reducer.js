import { FETCH_POPULATION } from './constants/actionTypes'

const initialState = {
  population: []
}

export default function reducer (state = initialState, action)  {
  switch (action.type) {
    case FETCH_POPULATION:
      return {...state, population: action.population}
    default:
      return state
  }
}
