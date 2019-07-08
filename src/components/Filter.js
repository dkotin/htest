import React, { Component } from 'react'
import { connect } from 'react-redux'
import { applyPopulationFilter} from '../actions'
import { withRouter } from 'react-router'

class Filter extends Component {
  updateFilter = (event) => {
    const filter = event.target.value
    this.props.applyPopulationFilter(filter)

    this.props.history.replace(`/?filter=${encodeURIComponent(filter)}`)
  }

  componentDidMount () {
    const filter = new URLSearchParams(this.props.location.search).get('filter') || ''
    this.props.applyPopulationFilter(filter)
  }

  render () {
    return <input
      type="text" name="filter" onChange={this.updateFilter} value={this.props.filter}
      placeholder="Filter"
    />
  }

}

export default withRouter(connect(
  state => ({filter: state.filter || ''}),
  dispatch => ({
    applyPopulationFilter: (filter) => dispatch(applyPopulationFilter(filter))
  })
)(Filter))
