import React, {Component} from 'react';
import {connect} from "react-redux";
import { fetchPopulation } from '../actions'
import ListItem from './ListItem'
import Filter from './Filter'
import { CITY_NAME } from '../constants/config'

class List extends Component {

  componentDidMount () {
    this.props.fetchPopulation()
  }

  render() {
    const {population, filteredPopulation, filter} = this.props

    return (
      <div>
        <h1>Population of {CITY_NAME}</h1>
        <h2>{filter}</h2>

        <Filter />

        <div className="container">
          <div className="card-deck mb-3 text-center">
          {/*<div className="card-deck">*/}
            {population.map((item) => <ListItem key={item.id} item={item}/>)}
          </div>
        </div>



        <hr />



        {/*{population && population.map((item) => <div>{item.name}</div>)}*/}

      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    population: state.filter.trim().length > 0 ? state.filteredPopulation: state.population,
    filteredPopulation: state.filteredPopulation,
    filter: state.filter
  }),
  dispatch => ({
    fetchPopulation: () => dispatch(fetchPopulation())
  })
)(List)
