import { FETCH_DETAILS, FETCH_POPULATION, FILTER_POPULATION } from './constants/actionTypes'
import { ITEMS_PER_PAGE } from './constants/config'

const initialState = {
  population: [],
  person: null,
  filteredPopulation: [],
  filter: '',
  pagesCount: 1
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_POPULATION:
      return { ...state, population: action.population, filteredPopulation: [...action.population] }
    case FETCH_DETAILS:
      return {
        ...state,
        person: action.population.find(item => item.id.toString() === action.id.toString())
      }
    case FILTER_POPULATION:
      const filter = action.filter.trim().toLowerCase()
      const filteredData = filterData(state.population, filter)
      return {
        ...state,
        filter: action.filter,
        filteredPopulation: paginateData(filteredData, action.page || 1),
        pagesCount: Math.ceil(filteredData.length / ITEMS_PER_PAGE)
      }
    default:
      return state
  }
}

function paginateData(data, page, pageSize = ITEMS_PER_PAGE) {
  const start = (page - 1) * pageSize
  const end = start + pageSize

  return data.slice(start, end)
}

function filterData(data, filter) {
  return data.filter(person => {
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
