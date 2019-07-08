import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyPopulationFilter } from '../actions'

class Filter extends Component {
  updateFilter = (event) => (
    //console.log(event.target.value)
    this.props.applyPopulationFilter(event.target.value)
  )

  render () {
    return <input type="text" name="filter" onChange={this.updateFilter} value={this.props.filter}/>
  }

}

export default connect(
  (state, ownProps) => ({filter: state.filter || ''}),
  dispatch => ({
    applyPopulationFilter: (filter) => dispatch(applyPopulationFilter(filter))
  })
)(Filter)
