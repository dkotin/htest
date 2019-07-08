import React, {Component} from 'react';
import {connect} from "react-redux";
import { applyPopulationFilter, fetchPopulation} from '../actions'
import ListItem from './ListItem'
import Filter from './Filter'
import { CITY_NAME } from '../constants/config'

class List extends Component {

  async componentDidMount () {
    await this.props.fetchPopulation()

    const filter = new URLSearchParams(this.props.location.search).get('filter') || ''
    this.props.applyPopulationFilter(filter)
  }

  render() {
    const {population} = this.props

    return (
      <div>
        <div className="container table-info">
          <h1>Population of {CITY_NAME}</h1>
        </div>

        <div className="container">
          <Filter />
        </div>

        <br />

        <div className="container">
          <div className="card-deck mb-3 text-center">
            {population.map((item) => <ListItem key={item.id} item={item}/>)}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    population: state.filter.trim().length > 0 ? state.filteredPopulation: state.population,
    filter: state.filter
  }),
  dispatch => ({
    fetchPopulation: () => dispatch(fetchPopulation()),
    applyPopulationFilter: (filter) => dispatch(applyPopulationFilter(filter))
  })
)(List)
