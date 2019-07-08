import React, {Component} from 'react';
import {connect} from "react-redux";
import { fetchPopulation } from '../actions'
import ListItem from './ListItem'

class List extends Component {

  componentDidMount () {
    this.props.fetchPopulation()
  }

  render() {
    const population = this.props.population[this.props.cityName]

    return (
      <div>
        <h1>Population of {this.props.cityName}</h1>

        <div></div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
          {/*<div className="card-deck">*/}
            {population && population.map((item) => <ListItem key={item.id} item={item}/>)}
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
    population: state.population
  }),
  dispatch => ({
    fetchPopulation: () => dispatch(fetchPopulation())
  })
)(List)
