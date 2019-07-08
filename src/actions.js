import { CITY_NAME, POPULATION_URL } from './constants/config'
import { FETCH_DETAILS, FETCH_POPULATION, FILTER_POPULATION } from './constants/actionTypes'

export const fetchPopulation = () => async (dispatch) => {
  const response = await fetch(POPULATION_URL)
  const data = await response.json()

  return dispatch({
    type: FETCH_POPULATION,
    population: data[CITY_NAME]
  })
}

export const fetchDetails = (id) => async (dispatch) => {
  const response = await fetch(POPULATION_URL)
  const data = await response.json()

  return dispatch({
    type: FETCH_DETAILS,
    population: data[CITY_NAME],
    id
  })
}

export const applyPopulationFilter = (filter) => async (dispatch) => {
  return dispatch({
    type: FILTER_POPULATION,
    filter
  })
}
