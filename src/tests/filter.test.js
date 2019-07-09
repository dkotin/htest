import reducer from './../reducer'
import { FETCH_DETAILS, FILTER_POPULATION } from '../constants/actionTypes'

describe('Testing data filtering', () => {
  const state = {
    population: [
      {
        id: 10,
        name: 'Bob Doe',
        friends: ['Carl Marl', 'Win Diesel', 'Loose Gasoline']
      },
      {
        id: 15,
        name: 'Celine Ceylone',
        friends: ['Mambo Jambo', 'Chest Jest']
      }
    ]
  }

  it('should return a person with DOE in his data', async () => {
    let newState = await reducer(state, { type: FILTER_POPULATION, filter: 'DOE' })
    expect(newState.filteredPopulation[0].name).toEqual(state.population[0].name)
    expect(newState.filteredPopulation).toHaveLength(1)
  })

  const friendName = state.population[1].friends[1]
  it(`should return a person with ${friendName} in his friends`, async () => {
    let newState = await reducer(state, { type: FILTER_POPULATION, filter: friendName })
    expect(newState.filteredPopulation[0].name).toEqual(state.population[1].name)
    expect(newState.filteredPopulation).toHaveLength(1)
  })

  it('should return zero persons - searching for unexisting data', async () => {
    let newState = await reducer(state, { type: FILTER_POPULATION, filter: 'GLUEsticksGREAT' })
    expect(newState.filteredPopulation).toHaveLength(0)
  })

  it('should return everyone - applying an empty filter', async () => {
    let newState = await reducer(state, { type: FILTER_POPULATION, filter: '' })
    expect(newState.filteredPopulation).toHaveLength(2)
  })

  it('should return everyone - applying an empty filter', async () => {
    let newState = await reducer(state, { type: FILTER_POPULATION, filter: '' })
    expect(newState.filteredPopulation).toHaveLength(2)
  })

  it('should set filter value', async () => {
    let newState = await reducer(state, { type: FILTER_POPULATION, filter: 'whoCares' })
    expect(newState.filter).toEqual('whoCares')
  })

  it('should be able to get record by id', async () => {
    let newState = await reducer(state, { type: FETCH_DETAILS, id: 15, population: state.population })
    expect(newState.person).toBeDefined()
    expect(newState.person.id).toEqual(15)
  })
})
