import { fetchPopulation } from '../actions'

const dispatchFake = (data) => {
  return data
}

describe('Testing data fetching', () => {
  it('Should be able to fetch population data', async () => {
    const result = await fetchPopulation()(dispatchFake)
    expect(result).toHaveProperty('population')
    expect(result.population[0]).toBeDefined()
    expect(result.population[0].name).toBeDefined()
    expect(result.population[1]).toBeDefined()
    expect(result.population[1].id).toBeDefined()
    expect(result.population[1].name).toBeDefined()
  })
})

