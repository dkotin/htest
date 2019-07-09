import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyPopulationFilter, fetchPopulation } from '../actions'
import ListItem from './ListItem'
import Filter from './Filter'
import { CITY_NAME } from '../constants/config'
import ReactPaginate from 'react-paginate'
import '../styles/styles.scss'

class List extends Component {

  state = {
    filter: ''
  }

  async componentDidMount () {
    const urlParams = new URLSearchParams(this.props.location.search)
    const filter = urlParams.get('filter') || ''

    await this.props.fetchPopulation()

    this.setState({ filter })

    this.props.applyPopulationFilter(filter)
  }

  handlePageClick = (page) => {
    const { filter } = this.state
    this.props.applyPopulationFilter(filter, page.selected + 1)
  }

  render () {
    const { population, pagesCount } = this.props
    if (population.count === 0) return null
    return (
      <div>
        <div className="container table-info">
          <h1>Population of {CITY_NAME}</h1>
        </div>

        <div className="container">
          <Filter/>
          <br/>
          <nav aria-label="Page navigation example">
            <ReactPaginate
              className="pagination"
              pageCount={pagesCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={this.handlePageClick}
              containerClassName="pagination"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              breakClassName="page-item"
            />
          </nav>
        </div>
        <br/>
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {population.map((item) => <ListItem key={item.id} item={item}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    //population: state.filter.trim().length > 0 ? state.filteredPopulation: state.population,
    population: state.filteredPopulation,
    filter: state.filter,
    pagesCount: state.pagesCount
  }),
  dispatch => ({
    fetchPopulation: () => dispatch(fetchPopulation()),
    applyPopulationFilter: (filter, page) => dispatch(applyPopulationFilter(filter, page))
  })
)(List)
