import { POPULATION_URL } from './constants/config'
import { FETCH_POPULATION } from './constants/actionTypes'

export const fetchPopulation = () => async (dispatch) => {
  const response = await fetch(POPULATION_URL)
  const population = await response.json()

  return dispatch({
    type: FETCH_POPULATION,
    population
  })
}
