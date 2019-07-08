import { FETCH_DETAILS, FETCH_POPULATION, FILTER_POPULATION } from './constants/actionTypes'

const initialState = {
  population: [],
  person: null,
  filteredPopulation: [],
  filter: ''
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULATION:
      return { ...state, population: action.population }
    case FETCH_DETAILS:
      return {
        ...state,
        person: action.population.find(item => item.id.toString() === action.id.toString())
      }
    case FILTER_POPULATION:
      const filter = action.filter.trim().toLowerCase()
      return {
        ...state,
        filter: action.filter,
        filteredPopulation: state.population.filter(person => {
          for (const value of Object.entries(person)) {
            if (Array.isArray(value)) {
              for (let i = 0; i < value.length; i++) {
                if (value[i].toString().toLowerCase().includes(filter)) {
                  return true
                }
              }
              continue
            }

            if (value.toString().toLowerCase().includes(filter)) {
              return true
            }
          }

          return false
        })
      }
    default:
      return state
  }
}
